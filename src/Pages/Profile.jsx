import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Profile extends Component {
    render() {
        return (
            <>
                <Header as='h1' style={{ "textAlign": "center" }}>Welcome, {this.props.username}!</Header>
                <div>
                </div>
            </>
        )
    }
}

const MSTP = state => (
    {
        username: state.userInfo.user.username
    }
)

export default connect(MSTP)(Profile)