import React from 'react';

import { Link } from 'react-router-dom';

import './user.style.scss';

const User = ({ user: { id, name, username, website } }) => {
  return (
    <div className="user">
      <div className="user__alias">{username}</div>
      <div className="user__name">{name}</div>
      <div className="user__website">{website}</div>
      <Link to={`/users/${id}`} className="user__details">
        Details
      </Link>
    </div>
  );
};

export default User;
