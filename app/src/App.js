import React, { Component } from 'react';
import Home from './components/Home';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    const api_url = 'http://localhost:3001/api/v1/notes';
    fetch(api_url)
      .then(response => response.json())
      .then(data => this.setState({
        notes: data
      }));
  }

  render() {
    return (
      <div>
        <Home notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
