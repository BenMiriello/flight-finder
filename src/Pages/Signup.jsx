import React from 'react'
import { Header } from 'semantic-ui-react'
import UserForm from '../Components/UserForm'

const Signup = () => (
  <>
    <Header as='h1' style={{ "textAlign": "center" }}>Signup</Header>
    <div className="signup-form-div">
      <UserForm type={"SIGNUP"} />
    </div>
  </>
)

export default Signup

