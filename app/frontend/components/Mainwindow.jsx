import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header/Header.jsx'
import User from './user/User.jsx'
import PostList from './postlist/PostList.jsx'

export default class MainWindow extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username: 'yeezy'
        }
    }

    render() {
        return (
            <div>
                <Header username={this.state.username} />
            </div>
        )
    }
}