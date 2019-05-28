import React from 'react';
import TopNews from '../components/TopNews';

const Search = (props) => {
    console.log("xxx", props.articles)

    const saveTyping = (e) => {
        console.log(e.target.value)

    }

    return (
        <div>
            <input type="text" name="searchbar" onChange={saveTyping}/>

        </div>
    );
}

export default Search;
