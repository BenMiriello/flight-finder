import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { Separator } from '../StyleComponents/Separator'
import { v1 as uuidv1 } from 'uuid'
import FlightOfferCard from '../Components/FlightOfferCard'
import FilterResults from './FilterResults'

class FlightOffers extends Component {

    state={
        filterParams:{
            
        }
    }

    showFlightOffers = () => {
        if (this.props.searchResults && this.props.searchResults.length >= 1) {
            // debugger
            return (
                this.props.searchResults.map(foobj => {
                    return (
                        <>
                            <FlightOfferCard key={uuidv1()} flightOffer={foobj}/>
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
        // debugger
        // console.log('lastSearchParams in FlightOffers.render: ', this.props.lastSearchParams);
        return (
            <Container className="flight-offer-cards-container">
                {/* {this.props.searchResults.length > 0 ? <FilterResults/> : null} */}
                <FilterResults />
                {this.showFlightOffers()}
            </Container>
        )
    }
}

const MSTP = state => ({
    lastSearchParams: state.lastSearchParams,
    searchResults: state.searchResults
})

export default connect(MSTP)(FlightOffers)

