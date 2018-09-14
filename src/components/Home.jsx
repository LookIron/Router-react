import React from 'react'
import Content from '../assets/img/home.png';

const  Home = () => {
    return (
      <div className="home">
        <h3>I am home...</h3>
        <img src={Content} alt="home"/>
      </div>
    );
};

export default Home;