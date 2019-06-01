import React from 'react';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { setImg, capitalize, getCategoryName } from '../data/helper-mothods';

const CarouselSlider = (props) => {
    return (
    <CarouselProvider
      naturalSlideWidth={50}
      naturalSlideHeight={50}
      totalSlides={5}
    >
        <div className="slider-root">
        <h3>
            <Link to={{
                pathname: `/${props.mainTitle}`,
                state: {
                    title: props.mainTitle,
                    news: props.news
                }
            }}>{capitalize(props.mainTitle)}</Link></h3>
            <Slider>
                {props.news.map((single, i) => (
                    <Slide key={i}>
                        <div className="news-list-item-small--slider">
                            <h3>{single.title}</h3>
                            <img src={setImg(single.urlToImage)} alt="test image" />
                            <p>{single.description}</p>
                            <Link to={{
                                pathname: "/selectedNews",
                                state: {
                                    title: single.title,
                                    imageUrl: setImg(single.urlToImage),
                                    description: single.description,
                                    customUrl: props.customUrl,
                                    category: getCategoryName(props.customUrl)
                                }
                            }}>See More</Link>
                        </div>
                    </Slide>
                ))}
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </div>
    </CarouselProvider>
  );
}

export default CarouselSlider;
