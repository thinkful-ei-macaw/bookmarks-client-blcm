import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Required = () => (
    <span className="form_required" ></span>
)

export default class BookmarkForm extends Component {

    state = {
        id: this.props.bookmark.id || undefined,
        title: this.props.bookmark.title || '',
        url: this.props.bookmark.url || '',
        description: this.props.description || '',
        rating: this.props.bookmark.rating || 1,
    }

    static propTypes = {
        onSubmit: PropTypes.func,
        onCancel: PropTypes.func,
        bookmark: PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ]),
            title: PropTypes.string,
            url: PropTypes.string,
            description: PropTypes.string,
            rating: PropTypes.number
        })
    }

    static defaultProps = {
        onSubmit: {},
        onCancel: {},
        bookmark: {}
    }

    changeTitle = e => {
        this.setState({
            description: e.target.value
        })
    }

    changeUrl = e => {
        this.setState({
            url: e.target.value
        })
    }

    changeDescription = e => {
        this.setState({
            description: e.target.value
        })
    }

    changeRating = e => {
        this.setState({
            rating: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { id, title, url, description, rating } = this.state;
        this.props.onSubmit(
            {
                id,
                title,
                url,
                description,
                rating: Number(rating)
            }
        )
    }


    render() {
        const { error, onCancel } = this.props;
        const { id, title, url, description, rating } = this.state;
        return (
            <form
                className="bookmark_form"
                onSubmit={this.handleSubmit}
            >
                <div
                    className="form_error"
                    role="alert"
                >
                    {error && <p>{error.message}</p>}
                </div>
                {id && (
                    <input
                        type="hidden"
                        name="id"
                        value={id}
                    />
                )}
                <div>
                    <label htmlFor="title" >
                        title
                         <Required />
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="title goes here"
                        required
                        value={title}
                        onChange={this.changeTitle}
                    />
                </div>
                <div>
                    <label htmlFor="url" >
                        URL
                         <Required />
                    </label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        placeholder="https://www.whatever.com"
                        required
                        value={url}
                        onChange={this.changeUrl}
                    />
                </div>
                <div>
                    <label htmlFor="description" >
                        description
                         <Required />
                    </label>
                    <input
                        type="description"
                        name="description"
                        id="description"
                        placeholder="some descriptive text"
                        required
                        value={description}
                        onChange={this.changeDescription}
                    />
                </div>
                <div>
                    <label htmlFor="rating" >
                        rating
                         <Required />
                    </label>
                    <select
                        name="rating"
                        id="rating"
                        min="1"
                        max="5"
                        value={rating}
                        >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="form_buttons">
                    <button onClick={onCancel} >
                        cancel
                    </button>
                    <button type="submit">
                        Save
                    </button>
                </div>
            </form>
        )
    }
}
