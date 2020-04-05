import React, { Component } from 'react';
import './App.css';
import AddBookmark from './components/AddBookmark';
//import { render } from '@testing-library/react';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>B00kMARx</h1>\
        <AddBookmark />
      </div>
    );
  }    
}

export default App;