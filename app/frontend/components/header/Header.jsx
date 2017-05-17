import React from 'react'
import ReactDOM from 'react-dom'

import styles from './style.css'

export default class Header extends React.Component {
    
    render() {
        return (
            <div className="navbarHeader">
                <a href="/"> Home </a>
                <a href="/user/<userid>/posts"> Posts </a>
            </div>
        )
    }
}