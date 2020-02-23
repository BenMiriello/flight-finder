import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import FlightOffersContainer from './FlightOffersContainer'

class TripsPage extends Component {
    render() {
        console.log(this.props.user.purchased_flight_offers)
        return (
            <>
                <Header as='h1' style={{ "text-align": "center" }}>My Trips</Header>
                {
                    this.props.user.purchased_flight_offers
                ?
                    <FlightOffersContainer flightOffers={this.props.user.purchased_flight_offers} />
                :
                    ""
                }
            </>
        )
    }
}

const MSTP = state => (
    {
        user: state.userInfo.user
    } 
)

export default connect(MSTP)(TripsPage)