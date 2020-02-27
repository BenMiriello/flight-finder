import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { changeUsername } from '../Redux/actions/userSession'
import { Header, Form, Button } from 'semantic-ui-react'
import { Separator } from '../StyleComponents/Separator'

const Settings = () => {

    const userId = useSelector(state => state.userInfo.user.id)
    const dispatch = useDispatch()
    const history = useHistory()

    const [settingsForm, setSettingsForm] = useState({
        newUsername: ""
    })

    const handleChange = e => {
        setSettingsForm({
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(changeUsername({
            newUsername: settingsForm.newUsername, userId
        }))
        history.push('/profile')
    }

    return (
        <div className="signup-form-div" >
            <Header as='h1' style={{ "textAlign": "center" }}>Settings</Header>
            <Separator px={30} />
            <Header as='h2' style={{ "textAlign": "center "}}>Account Settings</Header>
            <Form onSubmit={handleSubmit} >
                <Form.Field>
                    <label>Change Username</label>
                    <input 
                        name='newUsername'
                        placeholder='Username' 
                        value={settingsForm.newUsername}
                        onChange={handleChange}
                    />
                </Form.Field>
                <p style={{"fontSize": "12px", "textIndent": "20px", "position": "relative", "bottom": "10px"}}>Minimum length: 4 characters.</p>
                <Button type='submit'>Submit new Username</Button>
            </Form>
        </div>
    )
}

export default Settings

