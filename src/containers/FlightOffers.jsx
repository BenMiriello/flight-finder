import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Separator } from '../StyleComponents/Separator'
import { v1 as uuidv1 } from 'uuid'
import FlightOfferCard from '../Components/FlightOfferCard'

class FlightOffers extends Component {

    showFlightOffers = () => {
        if (this.props.flightOffers && this.props.flightOffers.length >= 1) {
            return (
                this.props.flightOffers.map(foobj => {
                    return (
                        <>
                            <FlightOfferCard key={uuidv1()} flightOffer={foobj}/>
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
        return (
            <Container className="flight-offer-cards-container">
                {this.showFlightOffers()}
            </Container>
        )
    }
}

export default FlightOffers

