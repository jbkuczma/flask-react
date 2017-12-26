import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Home.css';

const Note = ({note}) => (
    <div>
        <p> {note} </p>        
    </div>
);

class Home extends Component {

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
      </div>
    );
  }
}

export default Home;
