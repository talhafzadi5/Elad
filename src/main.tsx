import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import Routing from './Routing'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Routing />
  </Router>,
)
