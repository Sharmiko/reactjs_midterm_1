import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './sidebar.style.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">

        <li className="sidebar__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link'
            }
          >

            <span className="sidebar__item-text">Home</span>
          </NavLink>
        </li>

        <li className="sidebar__item">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link'
            }
          >
            <span className="sidebar__item-text">Users</span>
          </NavLink>
        </li>

        <li className="sidebar__item">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link'
            }
          >
            <span className="sidebar__item-text">About</span>
          </NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
