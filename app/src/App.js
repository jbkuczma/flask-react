import React, { Component } from 'react';
import Home from './components/Home';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
