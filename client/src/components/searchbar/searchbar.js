import React, { Component } from 'react';
import './searchbar.css';
// import Spinner from './../spinner';
import SearchResults from './../search-results';

export default class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
        };
    };
    componentDidMount(){
        //hardcode to hide search results
        document.addEventListener("keydown", this.escFunction, false);
        document.addEventListener("click", this.escFunction, true);
    };
    componentDidUpdate(){
        if(this.props.searchResults) {
            document.querySelector('.searchResults').focus();
        }
    };

    timeout = null;

    onSearchInput = (e) => {
        const event = e.target.value;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(()=> {
            this.props.onSearchChange(event);
        }, 1000);
    };

    //hardcode
    onFocus = () => {
        const d = document,
            sr = '.searchResults',
            si = '.search-input';
        if (d.activeElement === d.querySelector(si) && d.querySelector(sr)) {
            d.querySelector(sr).style.display='flex';
        }
    };
    onFocusLost = () => {
        const d = document,
            sr = '.searchResults',
            si = '.search-input';
        if (d.activeElement !== d.querySelector(sr) && d.activeElement !== d.querySelector(si)){
            d.querySelector(sr).style.display='none';
        }
    };
    escFunction = (e) => {
        //hardcode
        if(this.props.searchResults) {
            if (e.keyCode === 27) {
                document.activeElement.blur();
                this.onFocusLost();
            };
            if (e.target.id === 'app' || e.target.className === 'appBody') {
                document.querySelector('.searchResults').style.display = 'none';
            }
        }
    };

    render() {
        const searchResults = this.props.searchResults;
        return (
            <div className="searchBar">
                <input type="text"
                       className="search-input"
                       placeholder="type to search"
                       onFocus={this.onFocus}
                    // onBlur={this.onFocusLost}
                       onChange={this.onSearchInput}/>
                {this.props.searchResults ? <SearchResults
                    searchResults={searchResults}
                    onBlur={this.onFocusLost}
                    onVideoClick={this.props.onVideoClick} /> : null}


            </div>
        );
    };
};
