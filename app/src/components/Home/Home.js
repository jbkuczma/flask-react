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
      note: ''
    };
  }

  _handleChange = (event) => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  _handleSubmit = (event)  => {
    event.preventDefault();
    const {note} = this.state;
    const api_url = 'http://localhost:3001/api/v1/notes';
    const options = {
      method: 'POST',
      data: {
        note: note
      }
    };
    fetch(api_url, options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));

    // reset state
    this.setState({
      note: ''
    });
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
            Object.keys(this.props.notes).map((idx) => {
              return <Note key={idx} note={this.props.notes[idx]} />
            })
          }
        </div>
        <div>
          <form onSubmit={this._handleSubmit}>
            <input type="text" name="note" placeholder="Add a new note" onChange={this._handleChange}/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
