import React, { PureComponent} from 'react';
import { NavLink } from 'react-router-dom';

class HeaderNav extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { disabled: false}
        this.testMe = this.testMe.bind(this);
    }

    testMe(e) {
        let url = e.target.href;
        if (url.endsWith("categories")) {
            this.setState({ disabled: true });
        } else {
            this.setState({ disabled: false });
        }
    }

    render() {
        return(
            <header>
                <div className="header-links">
                    <NavLink 
                        to="/" 
                        activeClassName="is-active" 
                        exact={true}
                        onClick={this.testMe}
                    >Top News
                    </NavLink>
                    <NavLink 
                        to="/categories" 
                        activeClassName="is-active"
                        onClick={this.testMe}
                    >Categories
                    </NavLink>
                    <NavLink 
                        to="/search" 
                        activeClassName="is-active"
                        onClick={this.testMe}
                    >Search
                    </NavLink>
                </div>
                <div className="language-selector-buttons">
                    <button 
                        id="headerButton1"
                        className={this.props.country==="gb" ? "selected" : ""} 
                        onClick={this.props.selectCountry} 
                        type="button"
                        disabled={this.state.disabled ? "disabled" : null}

                    >GB
                    </button>
                    <button 
                        id="headerButton2"
                        className={this.props.country==="us" ? "selected" : ""} 
                        onClick={this.props.selectCountry} 
                        type="button"
                        disabled={this.state.disabled ? "disabled" : null}
                    >US
                    </button>
                </div>
            </header>
        );
    }
}

export default HeaderNav;
