import React from 'react';
import NewsListItem from './NewsListItem';

const NewsList = (props) => {
    return (
        <div className="news-list-section-main">
            <div class="full-width-div">
                <h2>{props.mainTitle}</h2>
            </div>
            <div className="news-list-section-flex">
                {props.news.map((single, i) => {
                    return <NewsListItem 
                        key={i}
                        title={single.title} 
                        imageUrl={single.urlToImage} 
                        description={single.description} 
                    />
                })}
            </div>
        </div>
    );
}

export default NewsList;
