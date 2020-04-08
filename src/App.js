import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import BookmarksContext from './BookmarksContext';
import { API_ENDPOINT, API_KEY } from './api';
//images and style
import './App.css';
//components
import BookmarkList from './components/BookmarkList';
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

  addBookmark = bookmark => {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark]
    })
  }

  setBookmarks = bookmarks => {
    this.setState({
      bookmarks,
      error: null
    })
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
    const contextValue = {
      bookmarks: this.state.bookmarks,
      addBookmark: this.addBookmark,
      deleteBookmark: this.deleteBookmark,
      updateBookmark: this.updateBookmark
    }
    return (
      <main className="App">
        <h1>B00KMARx!</h1>
        <BookmarksContext.Provider value={contextValue}>
          <div className="content" >
            <Route
            exact
            path="/"
            component={BookmarkList}
            />
            <Link
              to={'/'}
            />
            <Route
            exact
            path="/add-bookmark"
            component={AddBookmark}
            />
            <Link to="/add-bookmark">Add Bookmark</Link>
          </div>
        </BookmarksContext.Provider>
      </main>
    );
  }    
}

export default App;