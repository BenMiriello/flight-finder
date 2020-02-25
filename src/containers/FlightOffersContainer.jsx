import React, { Component } from 'react'
import FlightOfferCard from '../components/FlightOfferCard'
import { Container } from 'semantic-ui-react'
import { Separator } from '../styleComponents/Separator'
import { v1 as uuidv1 } from 'uuid';


export default class FlightOffersContainer extends Component {

    showFlightOffers = () => {
        if (this.props.flightOffers && this.props.flightOffers.length >= 1) {
            // debugger
            return (
                this.props.flightOffers.map(foobj => {
                    return (
                        <>
                            <FlightOfferCard key={uuidv1()} flightOffer={foobj} />
                            <Separator px={20} />
                        </>
                    )
                })
            )
        } else {
            return ""
        }
    }

    render() {
        // debugger
        return (
            <Container className="flight-offer-cards-container">
                {this.showFlightOffers()}
            </Container>
        )
    }
}

