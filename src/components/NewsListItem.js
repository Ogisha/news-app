import React from 'react';
import { Link } from 'react-router-dom';

const NewsListItem = (props) => {
    const setImg = () => {
        if (!props.imageUrl) {
            return "/assets/placeholder.gif";
        } else {
            return props.imageUrl
        }
    }
    return (
        <div className="news-list-item-small">
            <h3>{props.title}</h3>
            <img src={setImg()} alt="test image" />
            <p>{props.description}</p>
            <Link to={{
                pathname: "/selectednews",
                state: {
                    title: props.title,
                    imageUrl: setImg(),
                    description: props.description
                }
            }}>See More</Link>
        </div>
    );
}

export default NewsListItem;
