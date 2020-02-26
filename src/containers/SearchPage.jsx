import React, { Component } from 'react'
import SearchBar from './SearchBar'
import FlightOffersContainer from './FlightOffersContainer'
import { connect } from 'react-redux'

class SearchPage extends Component {

    render() {
        return (
            <div>
                <SearchBar/>
                <FlightOffersContainer flightOffers={this.props.searchResults} />
            </div>
        )
    }
}

const MSTP = state => (
    { searchResults: state.flights.searchResults }
)

export default connect(MSTP)(SearchPage)

