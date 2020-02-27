import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import { getProfileFetch } from './Redux/actions/userSession'
import Component from './Components'

const App = () => {

    useEffect(() => getProfileFetch())

    return (
        <Router>
            <Component.Nav/>
            <Routes/>
            <Component.Footer/>
        </Router>
    )
    
}

export default App

