import React from 'react'
import { Header } from 'semantic-ui-react'
import UserForm from '../Components/UserForm'

const Login = () => {

    return (
        <>
            <Header as='h1' style={{ "textAlign": "center" }}>Login</Header>
            <div className="signup-form-div" >
                <UserForm type={"LOGIN"}/>
            </div>
        </>
    )
}

export default Login

