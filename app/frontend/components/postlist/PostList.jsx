import React from 'react'
import ReactDOM from 'react-dom'

import Post from './Post.jsx'
import styles from './style.css'

export default class PostList extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    // should return all posts 

    componentWillMount() {
        // let posts = [] //hold all posts
        let url = 'http://127.0.0.1:5000/api/1.0/user/2/posts' //2 would be a var
        fetch(url)
            .then((data) => data.json())
            .then((_data) => {
                this.setState({
                    posts: _data['posts']
                })
            })
    }

    render() {
        return (
            <div className="postList">
                <ul className="list">
                    {this.state.posts.map( (post, key) => {
                        return <Post info={post} key={key} />
                    })}
                </ul>
            </div>
        )
    }
}