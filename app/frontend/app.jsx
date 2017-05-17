import React from 'react'
import ReactDOM from 'react-dom'

import MainWindow from './components/MainWindow.jsx'

export default class App extends React.Component {
    
    render() {
        return (
            <MainWindow name="James" />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))