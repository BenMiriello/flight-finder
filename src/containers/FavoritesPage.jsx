import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import FlightOffersContainer from './FlightOffersContainer'

class FavoritesPage extends Component {
    render() {
        let favorited = this.props.user.favorited_flight_offers
        return (
            <>
                <Header as='h1' style={{ "text-align": "center" }}>My Favorites</Header>
                { favorited ? <FlightOffersContainer flightOffers={favorited} /> : "" }
            </>
        )
    }
}

const MSTP = state => (
    {
        user: state.userInfo.user
    } 
)

export default connect(MSTP)(FavoritesPage)

