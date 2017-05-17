import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header/Header.jsx'

export default class MainWindow extends React.Component {
    
    render() {
        return (
            <div>
                <Header />
                <h1> hello {this.props.name} </h1>
            </div>
        )
    }
}