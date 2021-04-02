import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import userIcon from '../assets/images/user.svg';

const Header = () => (
  <header className="header">
    <div className="header__inner">
      <div className="header__left">
        <h1 className="header__title">Bookstore CMS</h1>
        <nav className="header__nav">
          <NavLink exact to="/" className="header__link">Books</NavLink>
          <NavLink exact to="/categories" className="header__link">Categories</NavLink>
        </nav>
      </div>
      <div className="header__right">
        <Link to="/" className="header__user">
          <img src={userIcon} alt="User" className="header__icon" />
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
