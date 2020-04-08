import React from 'react';
import PropTypes from 'prop-types';
import { API_KEY, API_ENDPOINT } from '../api';
import BookmarksContext from '../BookmarksContext';

const handleDelete = async (bookmarkId, cb) => {
  const req = {
    method: 'POST',
    headers: {
      'authorization': 'application/json',
      'content': `bearer ${API_KEY}`
    }
  }
    try {
      const res = await fetch(API_ENDPOINT, req);
      if (!res.ok) {
        throw new Error(res.status);
      }
      const data = await res.json();
    }
}

export default function Bookmark(props) {
    return (
      <div className="bookmark">
        <div className="bookmark__row">
          <div className="bookmark__title">
            <a 
              href={props.url} 
              target="_blank"
              rel="noopener noreferrer">
                {props.title}
              </a>
          </div>
        </div>      
        <div className="bookmark__description">
          {props.description}
        </div>
      </div>
    ) 
}