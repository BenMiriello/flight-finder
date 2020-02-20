import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
// import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import SignupPage from './containers/SignupPage'
import SearchPage from './containers/SearchPage'
import MyFavoritesPage from './containers/MyFavoritesPage';
import MyTripsPage from './containers/MyTripsPage';
import { getProfileFetch } from './Redux/actions/index'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount = () => {
    this.props.getProfileFetch()
  }

  render(){
    return (
      <Router>
        <div>
          <Header />
  
          <Switch>
            <Route exact path="/">
              <SearchPage />
            </Route>
            <Route path="/myfavorites">
              <MyFavoritesPage/>
            </Route>
            <Route path="/mytrips">
              <MyTripsPage/>
            </Route>
            <Route path="/signup">
              <SignupPage/>
            </Route>
            <Route path="/user">
              <UserProfile/>
            </Route>
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

