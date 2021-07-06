import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import '@styles/index.scss'
import ScrollToTop from '@src/hooks/useScrollToTop'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ScrollToTop />
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
