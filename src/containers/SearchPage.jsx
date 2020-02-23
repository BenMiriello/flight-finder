import React, { Component } from 'react'
import SearchBar from './SearchBar'
import FlightOffersContainer from './FlightOffersContainer'

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

    render() {
        return (
            <div>
                <SearchBar/>
                <FlightOffersContainer flightOffers={this.state.flightOffers} />
            </div>
        )
    }
}

