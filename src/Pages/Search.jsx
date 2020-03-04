import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchBar, FlightOffers } from '../Containers'

class Search extends Component {

    state = {
        featureSelection: null
    }

    fillFieldsToFeatured = (destination_code) => {
        this.setState({featureSelection: destination_code})
    }

    resetFeatureSelectionToNull = () => {
        this.setState({featureSelection: null})
    }
    
    render() {
        console.log(this.props.searchResults);
        return (
            <div>
                <SearchBar featureSelection={this.state.featureSelection} resetFeatureSelectionToNull={this.resetFeatureSelectionToNull} />
                <FlightOffers fillFieldsToFeatured={this.fillFieldsToFeatured} page={'search'} response={this.props.response} flightOffers={this.props.searchResults} />
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

