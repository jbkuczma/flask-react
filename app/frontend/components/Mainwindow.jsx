import React from 'react'
import ReactDOM from 'react-dom'

export default class MainWindow extends React.Component {
    
    render() {
        return (
            <div>
                <h1> hello {this.props.name} </h1>
            </div>
        )
    }
}