import React, { Component } from 'react';
import './App.css';
import Background from './Background';
import Poetry from './Poetry';

class App extends Component {
  
  render() {
    return (
      <div>
       <header className="header">
       <br/>
          <h1>QuickQuotes.com</h1>
          <br/>
        </header>
        <br/>
        <div >
        <Poetry/>
        <br/>
        </div>
        
        <div>
        <Background/>
        </div>
        
      </div>
    );
  }
}

export default App;

