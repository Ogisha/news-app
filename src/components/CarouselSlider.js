import React from 'react';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const CarouselSlider = (props) => {
    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
    <CarouselProvider
      naturalSlideWidth={50}
      naturalSlideHeight={50}
      totalSlides={5}
    >
        <div className="slider-root">
        <h3>{capitalize(props.mainTitle)}</h3>
            <Slider>
                {props.news.map((single, i) => (
                    <Slide index={i}>
                        <div className="news-list-item-small--slider">
                            <h3>{single.title}</h3>
                            <img src={`${single.urlToImage}`} alt="test image" />
                            <p>{single.description}</p>
                            <Link to={{
                                pathname: "/selectednews",
                                state: {
                                    title: props.title,
                                    imageUrl: props.imageUrl,
                                    description: props.description
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
