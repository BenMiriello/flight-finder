import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
// import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import SignupPage from './containers/SignupPage'
import SearchPage from './containers/SearchPage'
import MyFavoritesPage from './containers/MyFavoritesPage';
import MyTripsPage from './containers/MyTripsPage';

function App() {
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

export default App;

