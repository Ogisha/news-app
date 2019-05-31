import React from 'react';
import NewsList from './NewsList';

const Search = (props) => {
    const searchNews = (e) => {
        let term = e.target.value;
        let arr = []
         for (let i = 0; i < props.news.length; i++) {
             let newOne = props.news[i].title.toLowerCase();
             if (newOne.indexOf(term.toLowerCase()) > -1) {
                 arr.push(props.news[i])
             }
         }

         if (e.target.value !== "") {
             setTimeout(() => {
                props.recalculate(arr);
             }, 250);
         } else {
            props.resetSearchResults();
         }   
    }

    return (
        <div>
            <div className="input-field-div">
                <input 
                    type="text" 
                    name="searchbar" 
                    onChange={searchNews} 
                />
            </div>
            <NewsList mainTitle="Search results:" news={props.news} />
        </div>
    );
}

export default Search;
