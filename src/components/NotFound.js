import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
         <p className="not-found-par-display">Page not found - 404 - back to 
            <span><Link to="/"> Homepage</Link></span>
        </p>
         
        <div className="not-found-img-section">
            <img src="/assets/not-found.png" />
        </div>
       
    </div>
);

export default NotFound;