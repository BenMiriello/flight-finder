import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Pages from './Pages'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Pages.Search} />
        <Route path="/favorites" component={Pages.Favorites} />
        <Route path="/trips" component={Pages.Trips}/>
        <Route path="/signup" component={Pages.Signup}/>
        <Route path="/login" component={Pages.Login}/>
        <Route path="/profile" component={Pages.Profile}/>
        <Route path="/settings" component={Pages.Settings}/>
    </Switch>
)

export default Routes

