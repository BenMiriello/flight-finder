import React, { Component } from 'react'
import FlightOfferCard from '../components/FlightOfferCard'
import { Container } from 'semantic-ui-react'
import { Separator } from '../styleComponents/Separator'

export default class FlightOffersContainer extends Component {

    showFlightOffers = () => {
        let i = this.props.flightOffers.length - 1
        return (
            this.props.flightOffers.map(foobj => {
                if (i < this.props.flightOffers.length) {
                    return (
                        <>
                            <FlightOfferCard flightOffer={foobj} />
                            <Separator px={20}/>
                        </>
                    )
                } else {
                    return <FlightOfferCard flightOffer={foobj} />
                }
                i++
            })
        )
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

