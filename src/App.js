import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
// import Footer from './components/Footer'
import ProfilePage from './containers/ProfilePage'
import SignupPage from './containers/SignupPage'
import LoginPage from './containers/LoginPage'
import SearchPage from './containers/SearchPage'
import FavoritesPage from './containers/FavoritesPage';
import TripsPage from './containers/TripsPage';
import SettingsPage from './containers/SettingsPage'
import { getProfileFetch } from './Redux/actions/userSession'
import { connect } from 'react-redux'

class App extends Component {

    componentDidMount = () => {
        this.props.getProfileFetch()
    }

    render(){
        return (
            <Router>
                <div>
                    <Route path="*" component={NavBar} />
                    <Switch>
                        <Route exact path="/" component={SearchPage} />
                        <Route path="/favorites" component={FavoritesPage} />
                        <Route path="/trips" component={TripsPage}/>
                        <Route path="/signup" component={SignupPage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/profile" component={ProfilePage}/>
                        <Route path="/settings" component={SettingsPage}/>
                    </Switch>
                    {/* <Footer /> */}
                </div>
            </Router>
        );
    }
}

const MDTP = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(null, MDTP)(App)

