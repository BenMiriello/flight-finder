import React, { Component } from 'react'
import UserProfile from './UserProfile'
import Signup from './Signup'

export default class Body extends Component {
    render() {
        return (
            <div>
                <UserProfile/>
                <Signup/>
            </div>
        )
    }
}
