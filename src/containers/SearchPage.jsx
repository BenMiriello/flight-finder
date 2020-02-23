import React, { Component } from 'react'
import SearchBar from './SearchBar'
import FlightOfferCard from '../components/FlightOfferCard'
import { Container } from 'semantic-ui-react'
import { Separator } from '../styleComponents/Separator'

export default class SearchPage extends Component {

    state={
        flightOffers: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/flight_offers')
        .then(r => r.json())
        .then(data => {
            this.setState(prevState => ({
                flightOffers: [...prevState.flightOffers, ...data]
            }))
        })
        .then(console.log)
    }

    showFlightOffers = () => {
        let i = this.state.flightOffers.length - 1
        return (
            this.state.flightOffers.map(foobj => {
                if (i < this.state.flightOffers.length) {
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
        return (
            <div>
                <SearchBar/>
                <Container className="flight-offer-cards-container">
                    {this.showFlightOffers()}
                </Container>
            </div>
        )
    }
}

