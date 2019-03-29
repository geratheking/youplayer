import React from 'react';
import SearchResultsItem from './../search-results-item';
import './searchresults.css';

const SearchResults = (props) => {

    const results = props.searchResults.map((item, index) => {
        return (
            <SearchResultsItem
                key={ index }
                name={item.name}
                logo={item.logo}
                desc={item.desc}
                onclick={()=>props.onVideoClick(item)}/>
        )
    });
    return (<div className="searchResults">{ results }</div>);
};

export default SearchResults;
