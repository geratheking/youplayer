import React from 'react';
import './searchresultsitem.css';
const SearchResultsItem = (props) => {
    return (
        <div onClick={props.onclick}
             key={props.id}
             className="searchResults-item">
            <img src={props.logo} alt='thumb' />
            <div className="videoText">
                <span className="videoTitle">{props.name}</span>
                <span className="videoDesc">{props.desc}</span>
            </div>
            <button className="videoPlay">Watch video</button>
        </div>
    )
}

export default SearchResultsItem