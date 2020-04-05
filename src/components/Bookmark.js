import React from 'react';

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