import React, { Component } from 'react';
import './app.css';
import YoutubeApi from './../youtubeapi';
import SearchBar from './../searchbar';
import HistoryBar from './../historybar';
import VideoPlayer from './../videoplayer';
import axios from "axios";


export default class App extends Component {

    youtubeApi = new YoutubeApi();
    historybar = new HistoryBar();

    constructor() {
        super();
        this.state = {
            items: null,
            link: null,
            DBhistory: null
        };
    };

    putDataToDB = async (item) => {
        await axios.post("http://localhost:3001/api/putData", {name: item.name, link: item.link})
            .then(()=>{
                this.historybar.getDataFromDb()});
    };

    onSearchChange = (query) => {
        if(query) {
            this.getList(query);
        } else {
            this.setState({
                items: null
            })
        };
    };

    getList(query) {
        this.youtubeApi.getList(query)
            .then((items) => {
                this.setState({
                    items
                });
            });
    };

    onVideoClick = async(item) => {
        document.querySelector('.searchResults').style.display = 'none';
        if(item.link !== this.state.link) {
            let link = item.link;
            this.setState({
                link: link,
            });
            let historyItem = {name: item.name,link: item.link};
            this.putDataToDB(historyItem);
        };
    };

    onVideoHistoryClick = (item) => {
        if(document.querySelector('.searchResults')) {
            document.querySelector('.searchResults').style.display = 'none';
        };
        let link = item.link;
        this.setState({
            link: link
        });
    };

    render() {

        return (
            <div className="appBody">
                <SearchBar onSearchChange={this.onSearchChange}
                           searchResults={this.state.items}
                           onVideoClick={this.onVideoClick}
                />

                <div className="main">
                    <HistoryBar onVideoClick={ this.onVideoHistoryClick } />
                    <VideoPlayer video={this.state.link}
                                 autoplay={"0"}
                                 rel={"0"}
                                 modest={"1"} />
                </div>
            </div>
        );
    }
};



