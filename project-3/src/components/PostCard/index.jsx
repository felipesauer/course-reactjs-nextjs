import React from 'react';

import P from 'prop-types';

import './styles.css';

export const PostCard = ({ id, title, body, cover }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div key={id} className="post-content">
      <h1>
        {title} {id}
      </h1>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  id: P.number.isRequired,
  title: P.string.isRequired,
  body: P.string.isRequired,
  cover: P.string.isRequired,
};
