import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNav = (props) => {
    return(
        <header>
            <div className="header-links">
                <NavLink 
                    to="/" 
                    activeClassName="is-active" 
                    exact={true}
                >Top News
                </NavLink>
                <NavLink 
                    to="/categories" 
                    activeClassName="is-active"
                >Categories
                </NavLink>
                <NavLink 
                    to="/search" 
                    activeClassName="is-active"

                >Search
                </NavLink>
            </div>
            <div className="language-selector-buttons">
                <button 
                    id="headerButton1"
                    className={props.country==="gb" ? "selected" : ""} 
                    onClick={props.selectCountry} 
                    type="button"

                >GB
                </button>
                <button 
                    id="headerButton2"
                    className={props.country==="us" ? "selected" : ""} 
                    onClick={props.selectCountry} 
                    type="button"
        
                >US
                </button>
            </div>
        </header>
    );
}

export default HeaderNav;
