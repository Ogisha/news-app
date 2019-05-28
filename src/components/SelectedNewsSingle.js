import React from 'react';
import { Link } from 'react-router-dom';

const SelectedNewsSingle = (props) => {
    console.log("xxx", props)
    return (
        <div>
            <h3>{props.location.state.title}</h3>
            <img src={`${props.location.state.imageUrl}`} alt="test image" />
            <p>{props.location.state.description}</p>
            <Link to="/" params={{ title: props.title }} exact={true}>To home page</Link>
        </div>

    );
}

export default SelectedNewsSingle;