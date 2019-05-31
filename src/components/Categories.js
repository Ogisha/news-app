import React, { Component } from 'react';
import Axios from 'axios';
import CategoriesCarouselList from './CategoriesCarouselList';

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: ["general", "entertainment", "sports", "science", "technology", "health"],
            sortedNews: [],
        }
    }
  
    componentWillMount() {
        for (let i = 0; i < this.state.categories.length; i++) {
            Axios.get(`https://newsapi.org/v2/top-headlines?category=${this.state.categories[i]}&apiKey=c567d152716e475c9a3ba0b89c152119`)
            .then(response => { 
                let category = [];
                let section = {
                    name: "",
                    news: [],
                    startingNews: {}
                };
                for (let i = 0; i < 5; i++) {
                    category.push(response.data.articles[i]);
                }
                section.name = this.state.categories[i];
                section.news = category;
                section.startingNews = category[0];
                this.setState(() => ({
                   sortedNews: [...this.state.sortedNews, section]
                }))
            })
        } 
    }

    render() {
        return (
           <div className="carousel-wrapper">
                <CategoriesCarouselList categories={this.state.categories} news={this.state.sortedNews} />
           </div>
        );
    }
}

export default Categories;
