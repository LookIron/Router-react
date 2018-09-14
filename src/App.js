import React, { Component } from 'react';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">Title</div>
        <Menu />
      </div>
    );
  }
}

export default App;
