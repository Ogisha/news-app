import React from 'react';
import { Link } from 'react-router-dom';
import SelectedNewsSingle from '../components/SelectedNewsSingle';

const SelectedNews = (props) => {
    return (
        <div>
                <div class="smallNewsDisplay">
            <h3>{props.title}</h3>
            <img src={`${props.imageUrl}`} alt="test image" />
            <p>{props.description}</p>
            <Link to={{
                pathname: "/selectedNews",
                state: {
                    title: props.title,
                    imageUrl: props.imageUrl,
                    description: props.description
                }
            }}>See More</Link>
        </div>
        </div>


    );
}

export default SelectedNews;