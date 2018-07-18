import React, { Component } from 'react';
import axios from 'axios';

export default class Poetry extends Component {
    constructor() {
        super();
        this.state = {
            poems: null,
        };
        this.updatePoem = this.updatePoem.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        var poemWebsite = "https://talaikis.com/api/quotes/random/";
        axios(poemWebsite, {
            method: 'GET'
        })
            .then((poemThings) => {
                this.updatePoem(poemThings)
            })
        console.log("anything")
    }

    updatePoem(poems) {
        this.setState({ poems });
    }

    handleClick(poems) {
        var poemWebsite = "https://talaikis.com/api/quotes/random/";
        axios(poemWebsite, {
            method: 'GET'
        })
            .then((poemThings) => {
                this.updatePoem(poemThings)
            })
        console.log(poems)
    }


    render() {
        var styles = {
            color: 'white',
            textAlign: 'center',
            size: '22em',
            fontFamily: 'Lucida Sans', 


        }
        return (
            <div >
                <button onClick={this.handleClick}> New Quote </button>
                <br />
                <br />

                {this.state.poems &&
                    <div className="quoteQuote" style={styles}>
                        "{this.state.poems.data.quote} "
                 - {this.state.poems.data.author}
                    </div>
                }
            </div>

        )
    }
}