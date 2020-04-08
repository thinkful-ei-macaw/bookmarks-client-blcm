import React, { Component } from 'react';
import { API_ENDPOINT, API_KEY } from '../api';
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

    componentDidMount() {
        this.handleAdd();
    }

    async handleAdd(bookmark) {
        this.setState({
            error: null
        })
        //const location = window.location.hostname;
        const req = {
            method: 'POST',
            headers: {
                'authorization': 'application/json',
                'content': `bearer ${API_KEY}`
            },
            body: JSON.stringify(bookmark)
        }
        try {
            const res = await fetch(API_ENDPOINT, req);
            const data = await res.json();
            this.context.addBookmark(data);
            this.props.history.push('/');
        } catch (err) {
            this.setState({
                error: console.error(err)
            })
        }

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