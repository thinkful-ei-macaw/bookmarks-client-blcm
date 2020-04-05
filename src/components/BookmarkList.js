import React, { Component } from 'react';
import './bookmarkList.css';
import Bookmark from './components/Bookmark';

class BookmarkList extends Component {
  render() {
    
    return (
      <div className="bookmarkList">
        <ul>
          <li>
            bookmarx go here
          </li>
        </ul>
      </div>
    );
  }
}

BookmarkList.defaultProps = {
  bookmarks: []
};

export default BookmarkList;