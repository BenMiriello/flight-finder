import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import Routes from './Routes'
import { getProfileFetch } from './Redux/actions/userSession'
import Component from './Components'

class App extends React.Component {

    // APP WASN'T GETTING USER INFO AS A FUNCTIONAL COMPONENT SO IT'S BEEN REVERTED TO A CLASS COMPONENT
    // useEffect(() => getProfileFetch())

    componentDidMount(){
        this.props.getProfileFetch()
    }

    render(){
        return (
            <Router>
                <Component.Nav/>
                <Routes/>
                <Component.Footer/>
            </Router>
        )
    }
    
}

const MDTP = { getProfileFetch }

export default connect(null, MDTP)(App)

