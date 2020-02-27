import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import FlightOffers from '../Containers/FlightOffers'

class TripsPage extends Component {
    render() {
        let purchased = this.props.purchased_flight_offers
        return (
            <>
                <Header as='h1' style={{ "text-align": "center" }}>My Trips</Header>
                { purchased ? <FlightOffers flightOffers={purchased} /> : "" }
            </>
        )
    }
}

const MSTP = state => (
    {
        purchased_flight_offers: state.userInfo.user.purchased_flight_offers
    } 
)

export default connect(MSTP)(TripsPage)

