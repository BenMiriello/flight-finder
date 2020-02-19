import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item as={Link} to='/' header>Trip Connect</Menu.Item>
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
        <Menu.Item style={{"width": "45%"}}></Menu.Item>
        <Menu.Item as={Link} to='/signup'
          name='signup'
          active={activeItem === 'signup'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.handleItemClick}
        />     
        <Menu.Item as={Link} to='/user'
          name='myProfile'
          active={activeItem === 'myProfile'}
          onClick={this.handleItemClick}
        />   
      </Menu>
    )
  }
}

