import React, { Component } from 'react'
import { Header, Form, Button } from 'semantic-ui-react'
import { Separator } from '../styleComponents/Separator'
import { changeUsername } from '../Redux/actions/userSession'
// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class SettingsPage extends Component {

    defaultState = {
        newUsername: ""
    }

    state = this.defaultState

    handleSubmit = e => {
        e.preventDefault()
        let userInfo = {newUsername: this.state.newUsername, userId: this.props.userId}
        this.props.changeUsername(userInfo)
        // this.props.userPostFetch(this.state)
        // this.setState(this.defaultState)
        // add error conditionality
        // this.props.history.push('/')
    }

    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        // console.log(this.props.userId)
        return (
            <div className="signup-form-div" >
                <Header as='h1' style={{ "textAlign": "center" }}>Settings</Header>
                <Separator px={30} />
                <Header as='h2' style={{ "textAlign": "center "}}>Account Settings</Header>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Field>
                        <label>Change Username</label>
                        <input 
                            name='newUsername'
                            placeholder='Username' 
                            value={this.state.newUsername}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <p style={{"font-size": "12px", "text-indent": "20px", "position": "relative", "bottom": "10px"}}>Minimum length: 4 characters.</p>
                    <Button type='submit'>Submit new Username</Button>
                </Form>
            </div>
        )
    }
}

const MDTP = dispatch => ({
    changeUsername: (userInfo) => dispatch(changeUsername(userInfo))
})

const MSTP = state => (
    {
        userId: state.userInfo.user.id
    }
)

export default connect(MSTP, MDTP)(SettingsPage)