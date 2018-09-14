import React from 'react';
import {Route,
        Link,
        BrowserRouter as Router, 
      } from 'react-router-dom'

import Home from './Home';
import Post from './Post';

const  Menu = () => {
    return (
      <Router>
        <div className="menu">
          <div className="menu-h">
            <Link to="/">
              <div className="menu-h__item">
                <i className="fas fa-home">  Home</i>
              </div>
            </Link> 
            <br/>
            <Link to="/post">
              <div className="menu-h__item">
                <i className="fas fa-file-invoice">  Post </i>
              </div>
            </Link>
          </div>
          

          <Route exact path="/" component={Home}/>
          <Route path="/post" component = {Post}/>
        </div>
      </Router>
    );
};

export default Menu;