import React, { Component } from 'react';
import { API_ENDPOINT, API_KEY } from '../api';

export default class AddBookmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };

        //this.handleAdd = this.handleAdd.bind(this);
    }

    // handleAdd = async (event) => {
    //     event.preventDefault();
    //     //const location = window.location.hostname;
    //     const { title, url, description, rating } = event.target;
    //     const bookmark = {
    //         title: event.title.value,
    //         url: event.url.value,
    //         description: event.description.value,
    //         rating: event.rating.value,
    //     };
    //     const request = {
    //         method: 'POST',
    //         headers: {
    //             'authorization': 'application/json',
    //             'content': `bearer ${API_KEY}`
    //         },
    //         body: JSON.stringify(bookmark)
    //     };

    // try {
    //     const response = await fetch(API_ENDPOINT, request);
    //     const data = await response.json();
    //     if (response.ok) {

    //         this.setState({
    //             bookmarks: response.data
    //         })
    //     }
            
    // } catch (err) {
    //     this.setState({
    //         error: console.error(err)
    //     })
    // }

    // }

    render() {
        return (
            <div className="add-bookmark">
                <h2>Add A New Bookmark</h2>
                <form className="add-bookmark-form"
                onSubmit={(event) => this.handleAdd()}>
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
                        <button type="submit">
                            Save
                        </button>
                        <button>Cancel</button>
                    </div>
                </form>
                <ul>
                    {}
                </ul>
            </div>
        )
    }
}