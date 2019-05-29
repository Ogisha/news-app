import React from 'react';


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
