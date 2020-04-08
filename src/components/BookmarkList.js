import React, { Component } from 'react';
import Bookmark from './Bookmark';
import PropTypes from 'prop-types';
import BookmarksContext from '../BookmarksContext';

class BookmarkList extends Component {
  static propTypes = {
    bookmarks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]).isRequired,
      })
    )
  };

  static defaultProps = {
    bookmarks: []
  };

  static contextType = BookmarksContext;

  render() {
    const { bookmarks } = this.context;
    return (
      <section className="bookmark_list">
        <h2>Saved Bookmarks</h2>
        <ul>
          {bookmarks.map(bookmark =>
            <Bookmark
              key={bookmark.id}
              {...bookmark}
            />
            )}
        </ul>
      </section>
    );
  }
}

export default BookmarkList;