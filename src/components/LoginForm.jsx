import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchLoginUser } from '../Redux/actions/userSession'
import { withRouter } from 'react-router-dom'

class LoginForm extends Component {

    defaultState = {
        username: '',
        password: '',
        avatar: '',
        bio: ''
    }

    state = this.defaultState

    handleChange = e => {
        e.preventDefault()
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        // console.log('submitted');
        this.props.fetchLoginUser(this.state)
        this.setState(this.defaultState)
        // add error conditionality
        this.props.history.push('/')
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} >
                <Form.Field>
                    <label>Username</label>
                    <input 
                        name='username'
                        placeholder='Username' 
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <p style={{"font-size": "12px", "text-indent": "20px", "position": "relative", "bottom": "10px"}}>Minimum length: 4 characters.</p>
                <Form.Field>
                    <label>Password</label>
                    <input 
                        type='password' 
                        name='password'
                        placeholder='Password' 
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <p style={{"font-size": "12px", "text-indent": "20px", "position": "relative", "bottom": "10px"}}>Minimum length: 4 characters.</p>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchLoginUser: userInfo => dispatch(fetchLoginUser(userInfo))
})

export default withRouter(connect(null, mapDispatchToProps)(LoginForm))