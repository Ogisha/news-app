import React, { Component } from 'react';
import Axios from 'axios';
import SelectedNews from '../components/SelectedNews';

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: ["entertainment", "general", "health", "science", "sport", "technology"],
            newsByCategory: []
        }
    }

    componentDidMount() {
        for (let i = 0; i < this.state.categories.length; i++) {
            Axios.get(`https://newsapi.org/v2/top-headlines?category=${this.state.categories[i]}&apiKey=c567d152716e475c9a3ba0b89c152119`)
            .then(response => this.setState({
                newsByCategory: this.state.newsByCategory.concat(response.data.articles)
            }))
        }

    }

    render() {
        console.log(this.state)
        return (
           <div class="blablabla">
               <h2>{this.state.categories[3]}</h2>
               {this.state.newsByCategory.map(single => <SelectedNews title={single.title} imageUrl={single.urlToImage} description={single.description} />)}
           </div>
        );
    }
}

export default Categories;