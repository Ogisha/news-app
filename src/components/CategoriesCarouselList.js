import React from 'react';
import CarouselSlider from './CarouselSlider'

const CategoriesCarouselList = (props) => {

    const { news} = props; 
    console.log(props);
    return (
        <div className="testing">
            {props.news.map((category, i) => (
                <CarouselSlider key={i} mainTitle={category.name} news={category.news} />
                ))
            }
        </div>
    );
}

export default CategoriesCarouselList;
