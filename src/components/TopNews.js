import React from 'react';
import Axios from 'axios';
import SelectedNews from '../components/SelectedNews';

class TopNews extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="blablabla">
                <h2>{this.props.mainTitle}</h2>
                <div>
                {this.props.news.map((single) => {
                    return <SelectedNews title={single.title} imageUrl={single.urlToImage} description={single.description} />
                })}
            </div></div>
        );
    }
}

export default TopNews;
