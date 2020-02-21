import React from 'react'
import { Header } from 'semantic-ui-react'

import SignupForm from '../components/SignupForm'

const SignupPage = () => (
  <>
    <Header as='h1' style={{ "text-align": "center" }}>Signup</Header>
    <div className="signup-form-div" >
      <SignupForm/>
    </div>
  </>
)

export default SignupPage