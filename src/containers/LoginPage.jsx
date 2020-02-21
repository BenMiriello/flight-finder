import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'
import { Header } from 'semantic-ui-react'

export default class LoginPage extends Component {
    render() {
        return (
            <>
                <Header as='h1' style={{ "text-align": "center" }}>Login</Header>
                <div className="signup-form-div" >
                    <LoginForm/>
                </div>
            </>
        )
    }
}
