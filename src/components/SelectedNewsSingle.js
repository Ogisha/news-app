import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize } from '../data/helper-mothods';

const SelectedNewsSingle = (props) => {
    const { title, imageUrl, description, customUrl, category} = props.location.state;
    return (
        <div className="selected-news-display">
            <h3>{title}</h3>
            <img src={`${imageUrl}`} alt="test image" />
            <p>{description}</p>
            <Link to={customUrl}>back to {category}</Link>
        </div>
    );
}

export default SelectedNewsSingle;
