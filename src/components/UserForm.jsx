import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { persistUser, loginUserToDB } from '../Redux/actions/userSession'
import { useHistory } from 'react-router-dom'


const UserForm = props => {

    const dispatch = useDispatch()

    const [formParams, setFormParams] = useState({
        username: '',
        password: '',
        avatar: '',
        bio: ''
    })

    const handleChange = e => {
        setFormParams({
            ...formParams,
            [e.target.name]:e.target.value
        })
    }

    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        switch(props.type){
            case "LOGIN":
                dispatch(loginUserToDB(formParams))
                break
            case "SIGNUP":
                dispatch(persistUser(formParams))
                break
            default: break
        }
        history.push('/')
    }

    const { username, password } = formParams

    return (
        <Form onSubmit={handleSubmit} >
            <Form.Field>
                <label>Username</label>
                <input 
                    name='username'
                    placeholder='Username' 
                    value={username}
                    onChange={handleChange}
                />
            </Form.Field>
            <p style={{"fontSize": "12px", "textIndent": "20px", "position": "relative", "bottom": "10px"}}>Minimum length: 4 characters.</p>
            <Form.Field>
                <label>Password</label>
                <input 
                    type='password' 
                    name='password'
                    placeholder='Password' 
                    value={password}
                    onChange={handleChange}
                />
            </Form.Field>
            <p style={{"fontSize": "12px", "textIndent": "20px", "position": "relative", "bottom": "10px"}}>Minimum length: 4 characters.</p>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default UserForm

