import React, { Component } from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import { API_KEY, url } from '../data/api';
import HeaderNav from '../components/HeaderNav';
import SelectedNewsSingle from '../components/SelectedNewsSingle';
import NewsList from '../components/NewsList';
import Categories from '../components/Categories';
import Search from '../components/Search';
import NotFound from '../components/NotFound';

class NewsAppMainRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "gb",
            news: [],
            searchNews: []
        }
        this.selectCountry = this.selectCountry.bind(this);
        this.recalculate = this.recalculate.bind(this);
        this.resetSearchResults = this.resetSearchResults.bind(this);
    }

    componentDidMount() {
        Axios.get(`${url}${this.state.country}&apiKey=${API_KEY}`)
            .then(response => this.setState({
                news: response.data.articles,
                searchNews: response.data.articles
            })
        )
    }

    selectCountry(e) {
        const choice = e.target.innerHTML.toLowerCase();
        Axios.get(`${url}${choice}&apiKey=${API_KEY}`)
            .then(response => this.setState({
                news: response.data.articles,
                country: choice,
                searchNews: response.data.articles
            })
        )
    }

    displayHeadingTitle() {
        const message = "Top news from ";
        const countryFull = this.state.country === "gb" ? "Great Britain" : "United States";
        return message + countryFull;
    }

    recalculate(arr) {
      this.setState(() => ({
          searchNews: [...arr]
       })
      )
    }

    resetSearchResults() {
        this.setState((prevState) => ({
            searchNews: this.state.news
        })
        )
    }
    
    render() {
        return (
           <BrowserRouter>
                <div>
                    <HeaderNav selectCountry={this.selectCountry} />
                    <Switch>
                        <Route 
                            path="/" 
                            exact={true} 
                            render={
                                (props) => <NewsList 
                                                {...props} 
                                                mainTitle={this.displayHeadingTitle()} 
                                                news={this.state.news} />} 
                            />
                        <Route path="/selectedNews" component={SelectedNewsSingle} />
                        <Route path="/categories" component={Categories} />
                        <Route path="/search" render={(props) => <Search 
                                                {...props} 
                                                resetSearchResults={this.resetSearchResults} 
                                                recalculate={this.recalculate}
                                                country={this.props.country}
                                                news={this.state.searchNews} />} 
                        />
                       <Route 
                            path="/technology" 
                            exact={true} 
                            render={
                                (props) => <NewsList 
                                                {...props} 
                                                mainTitle={props.location.state.title} 
                                                news={props.location.state.news} />} />
                        <Route 
                            path="/sports" 
                            exact={true} 
                            render={
                                (props) => <NewsList 
                                                {...props} 
                                                mainTitle={props.location.state.title} 
                                                news={props.location.state.news} />} />
                        <Route 
                            path="/science" 
                            exact={true} 
                            render={
                                (props) => <NewsList 
                                                {...props} 
                                                mainTitle={props.location.state.title} 
                                                news={props.location.state.news} />} />
                        <Route 
                            path="/health" 
                            exact={true} 
                            render={
                                (props) => <NewsList 
                                                {...props} 
                                                mainTitle={props.location.state.title} 
                                                news={props.location.state.news} />} />
                        <Route 
                            path="/entertainment" 
                            exact={true} 
                            render={
                                (props) => <NewsList 
                                                {...props} 
                                                mainTitle={props.location.state.title} 
                                                news={props.location.state.news} />} />
                        <Route 
                            path="/general" 
                            exact={true} 
                            render={
                                (props) => <NewsList 
                                                {...props} 
                                                mainTitle={props.location.state.title} 
                                                news={props.location.state.news} />} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default NewsAppMainRouter;
