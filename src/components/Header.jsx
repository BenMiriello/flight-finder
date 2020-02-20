import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'

class Header extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        debugger
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item as={Link} to='/' header>
                    <img src='/planet-earth.png' />
                </Menu.Item>
                <Menu.Item as={Link} to='/myfavorites'
                    name='myFavorites'
                    active={activeItem === 'myFavorites'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item as={Link} to='/mytrips'
                    name='myTrips'
                    active={activeItem === 'myTrips'}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item 
                        as={Link} 
                        to='/signup'
                        name='signup'
                        active={activeItem === 'signup'}
                        onClick={this.handleItemClick}
                    />
                    <Dropdown item text='Login'>
                        {/* <Dropdown.Menu>  */}
                            {/* <Menu.Item> */}
                                <LoginForm/>
                            {/* </Menu.Item> */}
                        {/* </Dropdown.Menu> */}
                    </Dropdown>
                    <Dropdown item text={this.props.user.username}>
                        <Dropdown.Menu>
                            <Menu.Item 
                                as={Link} 
                                to='/user'
                                name='My Profile'
                                active={activeItem === 'myProfile'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                as={Link}
                                to='/'
                                name='logout' 
                                text='Logout'
                                active={activeItem === 'logout'}
                                onClick={this.handleItemClick}
                            /> 
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
        )
    }
}

const MSTP = state => {
    return {
        user: state.userInfo.user
    } 
}

export default connect(MSTP)(Header)

