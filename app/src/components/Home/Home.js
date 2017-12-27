import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Home.css';

const Note = ({note}) => (
    <div>
        <p> {note} </p>        
    </div>
);

class Home extends Component {

  constructor() {
    super();
    this.state = {
      note: '',
      notes: []
    };
  }

  componentDidMount() {
    const api_url = '/api/v1/notes';
    fetch(api_url)
      .then(response => response.json())
      .then(data => this.setState({
        notes: data
      }));
  }

  _handleChange = (event) => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  _handleSubmit = (event)  => {
    event.preventDefault();
    const {note} = this.state;
    const api_url = '/api/v1/notes';
    const options = {
      method: 'POST',
      body: JSON.stringify({
        note: note
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(api_url, options)
      .then(response => response.json())
      .then(data => {
        this.setState({
          note: '',
          notes: data
        })
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="home">
        <header className="home-header">
          <img src={logo} className="home-logo" alt="logo" />
          <h1 className="home-title"> Welcome to Flask-React </h1>
          <p> A boilerplate for a React web app with a Flask backend </p>
        </header>
        <div className="home-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          {
            Object.keys(this.state.notes).map((idx) => {
              return <Note key={idx} note={this.state.notes[idx]} />
            })
          }
        </div>
        <div>
          <form onSubmit={this._handleSubmit}>
            <input type="text" name="note" placeholder="Add a new note" onChange={this._handleChange} value={this.state.note} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
