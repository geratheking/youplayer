import React, { Component } from 'react';
import './historybar.css';
import axios from "axios";

export default class HistoryBar extends Component {
    constructor() {
        super();
        this.state = {
            DBhistory: [],
            intervalIsSet: null
        };
    };
    componentDidMount() {
        //only legit way as for me to update history bar
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 3000);
            this.setState({ intervalIsSet: interval });
        };
    };

    getDataFromDb = async () => {
        fetch("http://localhost:3001/api/getData")
            .then(data => data.json())
            .then(res => {
                if (res.data.length > 5) {
                    this.deleteFromDB(res.data.shift()._id);
                }
                 this.setState({
                    DBhistory: res.data
                });
            });
    };

    deleteFromDB = async (idToDelete) => {
        await axios.delete("http://localhost:3001/api/deleteData", {
                        data: {
                            _id: idToDelete
                        }
                    });
        await this.getDataFromDb();
    };
    render() {
        return (
            <div className="historyBar">
                <p>Watch History</p>
                <div className="historyList">
                    {!this.state.DBhistory || this.state.DBhistory.length<=0
                        ? "No videos"
                        : this.state.DBhistory.map((item, index) =>  {
                            return (
                                <div key={index}
                                     className="history-item">
                                    <div className="history-videoText"
                                         onClick={()=>this.props.onVideoClick(item)}
                                    >
                                        <span className="history-videoTitle">{item.name}</span>
                                    </div>
                                    <button className="videoDel"
                                            link={item.link}
                                            onClick={()=>this.deleteFromDB(item._id)}
                                    >DEL</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
};
