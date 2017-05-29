import React from 'react'
import ReactDOM from 'react-dom'

import styles from './style.css'

export default class Post extends React.Component {

    render() {
        return (
            <li className="postListPost"> {this.props.info} </li> 
        )
    }
}