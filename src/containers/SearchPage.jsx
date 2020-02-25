import React, { Component } from 'react'
import SearchBar from './SearchBar'
import FlightOffersContainer from './FlightOffersContainer'
import { fetchAllFlights } from '../Redux/actions/searchAndResults'
import { connect } from 'react-redux'

class SearchPage extends Component {

    // state={
    //     flightOffers: []
    // }

    componentDidMount(){
        this.props.fetchAllFlights()
        // fetch('http://localhost:3000/api/v1/flight_offers')
        // .then(r => r.json())
        // .then(data => {
        //     this.setState(prevState => ({
        //         flightOffers: [...prevState.flightOffers, ...data]
        //     }))
        // })
        // .then(console.log)
    }

    render() {
        // debugger
        return (
            <div>
                <SearchBar/>
                <FlightOffersContainer flightOffers={this.props.searchResults} />
            </div>
        )
    }
}

const MSTP = state => {
    // debugger
    return { searchResults: state.flights.searchResults }
}

const MDTP = { fetchAllFlights }

export default connect(MSTP, MDTP)(SearchPage)