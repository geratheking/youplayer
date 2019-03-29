import React, { Component } from 'react';
import HistoryBar from './../historybar';
import './videoplayer.css';

export default class VideoPlayer extends Component {
    historybar = new HistoryBar()
    componentDidUpdate() {
        this.historybar.getDataFromDb();
    };

    render() {
        const videoSrc = "https://www.youtube.com/embed/" +
            this.props.video + "?autoplay=1"
        return (
            <div className="playerBar">
                <p>Watch Video</p>
                <iframe className="player"
                        type="text/html"
                        width="100%"
                        height="100%"
                        src={videoSrc}
                        frameBorder="0"
                        title="player"/>
            </div>
        );
    };
};