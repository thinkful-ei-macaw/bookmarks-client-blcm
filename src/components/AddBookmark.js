import React, { Component } from 'react';
import { API_KEY, API_ENDPOINT} from '../api';
import PropTypes from 'prop-types';

import BookmarkForm from './BookmarkForm';
import BookmarksContext from '../BookmarksContext';

export default class AddBookmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func,
        }).isRequired
    };

    static contextType = BookmarksContext;

    handleSubmit = (e) => {
        e.preventDefault()
        // get the form fields from the event
        const { title, url, description, rating } = e.target;
        const bookmark = {
          title: title.value,
          url: url.value,
          description: description.value,
          rating: rating.value,
        }
        this.setState({ error: null })
        fetch(API_ENDPOINT, {
          method: 'POST',
          body: JSON.stringify(bookmark),
          headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${API_KEY}`
          }
        })
          .then(res => {
            if (!res.ok) {
              return res.json().then(error => {
                throw error
              })
            }
            return res.json()
          })
          .then(data => {
            title.value = ''
            url.value = ''
            description.value = ''
            rating.value = ''
            this.props.onAddBookmark(data)
          })
          .catch(error => {
            this.setState({ error })
          })
      }

    handleCancel = () => {
        this.props.history.push('/');
    }

    render() {
        const { error } = this.state;
        return (
            <section className="AddBookmark">
                <h2>Add a new Bookmark!</h2>
                <BookmarkForm
                    error={error}
                    onSubmit={this.handleAdd}
                    onCancel={this.handleCancel}
                />
            </section>
        );
    }
}