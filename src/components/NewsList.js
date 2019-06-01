import React from 'react';
import NewsListItem from './NewsListItem';
import { retrieveUrl } from '../data/helper-mothods'

const NewsList = (props) => (
    <div className="news-list-section-main">
        <div className="full-width-div">
            <h2>{props.mainTitle}</h2>
        </div>
        <div className="news-list-section-flex">
            {props.news.map((single, i) => {
                return <NewsListItem 
                    key={i}
                    title={single.title} 
                    imageUrl={single.urlToImage} 
                    description={single.description} 
                    customUrl={retrieveUrl(window.location.href)}
                />
            })}
        </div>
    </div>
);

export default NewsList;
