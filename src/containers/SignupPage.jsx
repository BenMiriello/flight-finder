import React from 'react'
import { Button, Checkbox, Form, Card } from 'semantic-ui-react'

const SignupPage = () => (
  <div className="signup-form-div" >
    <Form>
      <Form.Field>
        <label>Username</label>
        <input placeholder='Username' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input type="password" placeholder='Password' />
      </Form.Field>
      {/* <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field> */}
      <Button type='submit'>Submit</Button>
    </Form>
  </div>
)

export default SignupPage