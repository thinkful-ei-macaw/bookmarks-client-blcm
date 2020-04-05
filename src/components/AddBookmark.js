import React, { Component } from 'react';

export default class AddBookmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarks: [],
            error: false
        };
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd = e => {
        e.preventDefault();
        //some event handler code here
    }

    render() {
        return (
            <div className="add-bookmark">
                <h2>Add A New Bookmark</h2>
                <form classname="add-bookmark-form">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title"
                        id="title" placeholder="titleGoesHere" />
                    <label htmlFor="url">URL:</label>
                    <input type="text" name="url" id="url" placeholder="linkGoesHere" />
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" name="description" id="description" placeholder="typeAboutItHere" />
                    <label htmlFor="rating">Rating:</label>
                    <input
                        type="number" name="rating"
                        id="rating" min="1" max="5" />
                    <div className="add-bookmark-button">
                        <button type="submit">Save</button>
                        <button>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}