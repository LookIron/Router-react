import React from 'react'
import Content from '../assets/img/post.png';

const  Post = () => {
    return (
      <div className="post">
         <h3>I am Post...</h3>
        <img src={Content} alt="home"/>
      </div>
    );
};

export default Post;