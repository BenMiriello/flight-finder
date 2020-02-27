import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProfileFetch } from './Redux/actions/userSession'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
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

const MDTP = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(null, MDTP)(App)

