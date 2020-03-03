import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import Routes from './Routes'
import { getProfileFetch } from './Redux/actions/userSession'
import Component from './Components'
import { refreshResponse } from './Redux/actions/searchAndResults'

class App extends React.Component {

    // APP WASN'T GETTING USER INFO AS A FUNCTIONAL COMPONENT SO IT'S BEEN REVERTED TO A CLASS COMPONENT
    // useEffect(() => getProfileFetch())

    componentDidMount(){

        // Get test response by default for testing:
        // this.props.refreshResponse({id: 200})
        
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

const MDTP = { getProfileFetch, refreshResponse }

export default connect(null, MDTP)(App)

