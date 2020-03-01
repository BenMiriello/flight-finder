import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchBar, FlightOffers } from '../Containers'

class Search extends Component {

    render() {
        return (
            <div>
                <SearchBar/>
                <FlightOffers page={'search'} flightOffers={this.props.searchResults} />
            </div>
        )
    }
}

const MSTP = state => (
    { searchResults: state.searchResults }
)

export default connect(MSTP)(Search)

