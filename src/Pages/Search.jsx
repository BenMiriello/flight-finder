import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchBar, FlightOffers } from '../Containers'

class Search extends Component {

    render() {
        console.log(this.props.searchResults);
        return (
            <div>
                <SearchBar/>
                <FlightOffers page={'search'} response={this.props.response} flightOffers={this.props.searchResults} />
            </div>
        )
    }
}

const MSTP = state => (
    { 
        searchResults: state.searchResults,
        response: state.response
    }
)


export default connect(MSTP)(Search)

