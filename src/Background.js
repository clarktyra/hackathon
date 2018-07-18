import React, { Component } from 'react';
import axios from 'axios';

export default class Background extends Component {
    constructor() {
        super();
        this.state = {
            pictures: null,
        };

        this.updateResult = this.updateResult.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        var pageNumber = Math.floor(Math.random() * 30000);
        axios("https://api.harvardartmuseums.org/image?apikey=7d144090-8948-11e8-9c4c-d58b1a4310c7&page=" + pageNumber, {
            method: 'GET',
        })
            .then((things) => {
                this.updateResult(things)
            })
    }

    updateResult(pictures) {
        this.setState({ pictures });

    }

    handleClick(things) {
        var pageNumber = Math.floor(Math.random() * 30000);
        axios("https://api.harvardartmuseums.org/image?apikey=7d144090-8948-11e8-9c4c-d58b1a4310c7&page=" + pageNumber, {
            method: 'GET',
        })
            .then((things) => {
                this.updateResult(things)
            })
    }

    render() {
        var styles = {
            textAlign: 'center',
        }
        return (
            <div>

                <button onClick={this.handleClick}> New Image </button>
                <br />
                <br />
                {this.state.pictures &&
                    <div style={styles}>
                        <img src={this.state.pictures.data.records[Math.floor(Math.random() * 8)].baseimageurl} alt="hopefully something" />
                    </div>
                }
            </div>
        )
    }
}