import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchBar, FlightOffers } from '../Containers'

class Search extends Component {

    state = {
        featureSelection: {
            active: false,
            originLocationCode: '',
            destinationLocationCode: '',
            departureDate: '',
            returnDate: ''
        }
    }

    fillFieldsToFeatured = (destinationLocationCode) => {
        console.log(destinationLocationCode);
        if (!this.state.featureSelection.active) {
            this.setState({featureSelection: {
                active: true,
                originLocationCode: 'JFK',
                destinationLocationCode: destinationLocationCode,
                departureDate: '2020-03-25',
                returnDate: '2020-04-01'
            }})
        } else {
            this.resetFeatureSelectionToFalse()
        }
    }

    resetFeatureSelectionToFalse = () => {
        this.setState(prevState => ({featureSelection: {
            ...prevState.featureSelection,
            active: false,
        }}))
    }
    
    render() {
        return (
            <div>
                <SearchBar featureSelection={this.state.featureSelection} resetFeatureSelectionToFalse={this.resetFeatureSelectionToFalse} />
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

