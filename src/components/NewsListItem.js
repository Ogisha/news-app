import React from 'react';
import { Link } from 'react-router-dom';
import { setImg, getCategoryName, retrieveUrl } from '../data/helper-mothods';

const NewsListItem = (props) => (
    <div className="news-list-item-small">
        <h3>{props.title}</h3>
        <img src={setImg(props.imageUrl)} alt="test image" />
        <p>{props.description}</p>
        <Link to={{
            pathname: "/selectednews",
            state: {
                title: props.title || "title",
                imageUrl: setImg(props.imageUrl),
                description: props.description,
                customUrl: props.customUrl,
                category: getCategoryName(props.customUrl)
            }
        }}>See More</Link>
    </div>
);

export default NewsListItem;
