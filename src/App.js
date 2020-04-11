import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BookmarksContext from './BookmarksContext';
import { API_ENDPOINT, API_KEY } from './api';
//images and style
import './App.css';
//components
import NavBar from './components/NavBar';
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

  deleteBookmark = bookmarkId => {
    const newBookmarks = this.state.bookmarks.filter(bm =>
      bm.id !== bookmarkId
    )
    this.setState({
      bookmarks: newBookmarks
    })
  }



  async componentDidMount() {
    fetch(API_ENDPOINT, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(this.setBookmarks)
      .catch(error => {
        console.error(error)
        this.setState({ error })
      })
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
          <NavBar />
          <div className='content' >
            <Route
              path='/add-bookmark'
              component={AddBookmark}
            />
            <Route
              exact
              path='/'
              component={BookmarkList}
            />
          </div>
        </BookmarksContext.Provider>
      </main>
    );
  }
}

export default App;