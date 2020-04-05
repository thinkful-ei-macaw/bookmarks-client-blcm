import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { API_KEY, API_ENDPOINT } from './api';
//images and style
import './App.css';
//components
import BookmarkApp from './components/BookmarkApp';
import AddBookmark from './components/AddBookmark';
//import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      error: null
    }
  }

  async componentDidMount() {
    const request = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
    }  
    try {
      const response = await fetch(API_ENDPOINT, request);
      const data = await response.json();
      if (response.ok) {
        this.setState({
          bookmarks: data,
          error: null
        })
      }
    } catch (err) {
      this.setState({
        error: err.message
      })
    }
  }



  render() {
    return (
      <div className="App">
        <AddBookmark />
        <ul>
          <li>
            {this.state.bookmarks}
          </li>
        </ul>
      </div>
    );
  }    
}

export default App;