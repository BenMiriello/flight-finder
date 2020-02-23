import React, { Component } from 'react'
import SearchBar from './SearchBar'
import FlightOfferCard from '../components/FlightOfferCard'
import { Container } from 'semantic-ui-react'

export default class SearchPage extends Component {

    state={
        flightOffers: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/flight_offers/204')
        .then(r => r.json())
        .then(data => {
            this.setState(prevState => ({
                flightOffers: [...prevState.flightOffers, data]
            }))
        })
        .then(console.log)
    }

    showFlightOffers = () => {
        console.log(this.state.flightOffers[0])
        return (
            this.state.flightOffers.map(foobj => <FlightOfferCard flightOffer={foobj} />)
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

