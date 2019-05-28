import React, { Component } from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import { API_KEY, url } from '../data/api';
import HeaderNav from '../components/HeaderNav';
import SelectedNewsSingle from '../components/SelectedNewsSingle';
import TopNews from '../components/TopNews';
import Categories from '../components/Categories';
import Search from '../components/Search';
import NotFound from '../components/NotFound';

class NewsAppMainRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "gb",
            news: []
        }
        this.selectCountry = this.selectCountry.bind(this);
    }

    componentDidMount() {
        Axios.get(`${url}${this.state.country}&apiKey=${API_KEY}`)
            .then(response => this.setState({
                news: response.data.articles
            })
        )
    }

    selectCountry(e) {
        const choice = e.target.innerHTML.toLowerCase();
        Axios.get(`${url}${choice}&apiKey=${API_KEY}`)
            .then(response => this.setState({
                news: response.data.articles,
                country: choice
            })
        )
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <HeaderNav selectCountry={this.selectCountry} />
                    <Switch>
                        <Route path="/" exact={true} render={(props) => <TopNews {...props} mainTitle={this.state.country} news={this.state.news} />} />
                        <Route path="/selectednews" component={SelectedNewsSingle} />
                        <Route path="/categories" component={Categories} />
                        <Route path="/search" render={(props) => <Search {...props} country={this.props.country} news={this.state.news} />} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default NewsAppMainRouter;
