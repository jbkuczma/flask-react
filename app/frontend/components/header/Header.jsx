import React from 'react'
import ReactDOM from 'react-dom'

import styles from './style.css'

export default class Header extends React.Component {
    
    render() {
        let profileURL = `/${this.props.username}/posts`
        return (
            <div className="navbarHeader">
                <h1> Hello {this.props.username} </h1>
                <a href="/"> Home </a>
                <a href={profileURL}> Posts </a>
            </div>
        )
    }
}