import React from 'react';
import CarouselSlider from './CarouselSlider'

const CategoriesCarouselList = (props) => {
    const { news} = props; 
    return (
        <div className="testing">
            {props.news.map((category, i) => (
                <CarouselSlider 
                    key={i} 
                    mainTitle={category.name} 
                    news={category.news}
                    customUrl = "/categories"
                />
                ))
            }
        </div>
    );
}

export default CategoriesCarouselList;
