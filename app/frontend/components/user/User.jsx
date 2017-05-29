import React from 'react'
import ReactDOM from 'react-dom'

import styles from './style.css'

export default class User extends React.Component {
    
    render() {
        return (
            <div>
                <h1> hello {this.props.username} </h1>
            </div>
        )
    }
}