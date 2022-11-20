import React, { useState, useEffect } from 'react';
import { resolvePath, useParams } from 'react-router-dom';

import Post from '../post/post.component';


import './user-details.style.scss';

const FullUser = () => {
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'GET',
      }),
      fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'GET',
      }),
    ])
      .then((results) => Promise.all(results.map((r) => r.json())))
      .then((response) => {
        setUser(response[0]);
        const userPosts = response[1].filter((post) => post.userId == id);
        setPosts(userPosts);
      });
  }, [id]);

  return (
    <div className="full-user">
      <p><h2>{user?.username}, {user?.name}, {user?.phone}</h2></p>

      <div className="full-user__location-info info-box">
        <h4 className="info-box__header">Address:</h4>
        <p>{user?.address.city} {user?.address.street} {user?.address.suite} {user?.address.zipcode}</p>
      </div>

      <div className="full-user__company-info info-box">
        <h4 className="info-box__header">Company</h4>
        <p>{user?.company.name}, {user?.company.catchPhrase}, {user?.company.bs}</p>
      </div>

      <h2 className="full-user__post-header">Posts:</h2>
      <ul className="posts">
        {posts.map((post) => {
          return (
            <li key={post.id} className="posts__item">
              <Post post={post} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FullUser;
