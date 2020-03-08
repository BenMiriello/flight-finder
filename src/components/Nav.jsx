import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProfileFetch, logoutUser } from '../Redux/actions/userSession'
import { Route } from 'react-router-dom'
import { Separator } from '../StyleComponents/Separator'

class Nav extends Component {
    
    state = {}

    handleItemClick = (e, { name }) => {
        switch (name) {
            case 'logout':
                localStorage.removeItem('token')
                this.props.logoutUser()
                break
            default:
                this.setState({ activeItem: name })
                break
        }
    }

    signupMenu = () => (
        <Menu.Menu position='right'>
            <Menu.Item 
            as={NavLink} 
            to='/signup'
            name='signup'
            active={this.state.activeItem === 'signup'}
            onClick={this.handleItemClick}
            />
            <Menu.Item 
                as={NavLink}
                to='/login'
                name="login"
                active={this.state.activeItem === 'login'}
                onClick={this.handleItemClick} 
            />
        </Menu.Menu>
    )

    userMenu = () => (
        <Menu.Menu position='right'>
            <Dropdown item icon="user outline" text={this.props.user?.username ? this.props.user.username : null} >
                <Dropdown.Menu>
                    <Menu.Item 
                        as={NavLink} 
                        to='/profile'
                        name='My Profile'
                        text='My Profile'
                        active={this.state.activeItem === 'myProfile'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        as={NavLink}
                        to='/settings'
                        name='settings' 
                        text='Settings'
                        active={this.state.activeItem === 'settings'}
                        // onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        as={NavLink}
                        to='/'
                        name='logout' 
                        text='Logout'
                        active={this.state.activeItem === 'logout'}
                        onClick={this.handleItemClick}
                    /> 
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Menu>
    )

    render() {
        const { activeItem } = this.state
        // console.log(this.props.token)

        return (
            <Route>
                {/* <Menu style={{"backgroundColor":"rgb(68,133,197)","background":"linear-gradient(90deg, rgba(68,133,197,0.95) 30%, rgba(186,97,250,1) 100%)"}}> */}
                <Menu style={{"height":"60px","backgroundColor":"white"}}>
                    <Menu.Item as={NavLink} to='/' style={{"backgroundColor":"white"}} >
                        {/* <img src='/flight-finder-logo-cutout.png' alt='two arrows with plane icons' style={{"width":"50px"}} />
                        <Separator px={5}/>
                        <img src='/flight-finder-logo-text.png' alt='flight finder' style={{"width":"150px"}} /> */}
                        <img src='/flight-finder-logo-and-text-cutout.png' alt='Flight Finder' style={{"width":"200px"}} />
                    </Menu.Item>
                    <Menu.Item as={NavLink} to='/favorites'
                        name='favorites'
                        active={activeItem === 'favorites'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item as={NavLink} to='/trips'
                        name='trips'
                        active={activeItem === 'trips'}
                        onClick={this.handleItemClick}
                    />
                    { localStorage.token && localStorage.token.length > 0 ? this.userMenu() : this.signupMenu() }
                </Menu>
            </Route>
        )
    }
}

const MSTP = state => (
    {
        user: state.userInfo.user,
        token: state.userInfo.token
    } 
)

const MDTP = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
    logoutUser: () => dispatch(logoutUser())
})

export default connect(MSTP, MDTP)(Nav)

// https://react.semantic-ui.com/modules/dropdown/#usage-close-on-change