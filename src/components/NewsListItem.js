import React from 'react';
import { Link } from 'react-router-dom';

const NewsListItem = (props) => {
    return (
        <div className="news-list-item-small">
            <h3>{props.title}</h3>
            <img src={`${props.imageUrl}`} alt="test image" />
            <p>{props.description}</p>
            <Link to={{
                pathname: "/selectednews",
                state: {
                    title: props.title,
                    imageUrl: props.imageUrl,
                    description: props.description
                }
            }}>See More</Link>
        </div>
    );
}

export default NewsListItem;
