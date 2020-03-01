import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { Separator } from '../StyleComponents/Separator'
import { v1 as uuidv1 } from 'uuid'
import FlightOfferCard from '../Components/FlightOfferCard'
import RefreshResults from '../Components/RefreshResults'
import FilterResults from './FilterResults'

class FlightOffers extends Component {

    state={
        filterParams:{
            
        }
    }

    showFlightOffers = () => {
        if (this.props.flightOffers && this.props.flightOffers.length >= 1) {
            return (
                this.props.flightOffers.map(fOObj => {
                    return (
                        <>
                            <FlightOfferCard key={uuidv1()} flightOffer={fOObj}/>
                            <Separator px={20} />
                        </>
                    )
                })
            )
        } else {
            return ""
        }
    }

    render() {
        return (
            <Container className="flight-offer-cards-container">
                {this.props.response.expected_flight_offer_count && this.props.page === 'search' ? <RefreshResults/> : null}
                {this.props.flightOffers.length > 0 ? <FilterResults/> : null}
                {/* {this.props.page === 'favorites' || 'trips' && this.props.flightOffers.length > 0} */}
                {this.showFlightOffers()}
            </Container>
        )
    }
}

const MSTP = state => ({
    // lastSearchParams: state.lastSearchParams,
    // searchResults: state.searchResults,
    response: state.response
})

export default connect(MSTP)(FlightOffers)

