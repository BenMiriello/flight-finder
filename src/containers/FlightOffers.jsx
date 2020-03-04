import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header } from 'semantic-ui-react'
import { Separator } from '../StyleComponents/Separator'
import { v1 as uuidv1 } from 'uuid'
import FlightOfferCard from '../Components/FlightOfferCard'
import RefreshResults from '../Components/RefreshResults'
import FilterResults from './FilterResults'
import { clearErrors } from '../Redux/actions/searchAndResults'
import FeaturedCard from '../Components/FeaturedCard'

class FlightOffers extends Component {

    state={
        limit: 20,
        sortBy: "price",
        excludedAirlineCodes: [],
        travelClass: null,
        nonStop: false,
        maxPrice: null
    }

    setLimit = (newLimit) => {
        this.setState({
            limit: newLimit
        })
    }

    setSortBy = (newSort) => {
        this.setState({
            sortBy: newSort
        })
    }

    addOrRemoveExcludedAirlineCodes = (iata) => {
        let excludedArray = this.state.excludedAirlineCodes
        if (excludedArray.includes(iata)) {
            excludedArray.splice(iata)
        } else {
            excludedArray.push(iata)
        }
        this.setState({
            excludedAirlineCodes: excludedArray
        })
    }

    setTravelClass = (newClass) => {
        this.setState({
            travelClass: newClass
        })
    }

    toggleNonStop = () => {
        this.setState(prevState => ({
            nonStop: !prevState.nonStop
        }))
    }

    setMaxPrice = (newPrice) => {
        this.setState({
            maxPrice: newPrice
        })
    }

    findCommonElement = (array1, array2) => { 
      
        // Loop for array1 
        for(let i = 0; i < array1.length; i++) { 
              
            // Loop for array2 
            for(let j = 0; j < array2.length; j++) { 
                  
                // Compare the element of each and 
                // every element from both of the 
                // arrays 
                if(array1[i] === array2[j]) { 
                  
                    // Return if common element found 
                    return true; 
                } 
            } 
        }
        // Return if no common element exist 
        return false;  
    }

    showFlightOffers = () => {
        if (this.props.flightOffers && this.props.flightOffers.length >= 1) {
            let excluded = this.state.excludedAirlineCodes
            return (
                this.props.flightOffers.map(FO => {
                    let iataArray = []
                    FO.itineraries.forEach(itin => {
                        itin.segments.forEach(seg => {
                            iataArray.push(seg.airline.iata_code)
                            iataArray.push(seg.operating_airline.iata_code)
                        })
                    }) 
                    if (this.findCommonElement(iataArray, excluded)) {
                        return null
                    } else {
                        if (this.props.page === 'trips'){
                            return (
                                <>
                                    <FlightOfferCard key={uuidv1()} flightOffer={FO} fan/>
                                    <Separator px={20} />
                                </>
                            )
                        } else {
                            return (
                                <>
                                    <FlightOfferCard key={uuidv1()} flightOffer={FO}/>
                                    <Separator px={20} />
                                </>
                            )
                        }

                    }
                })
            )
        } else {
            return <FeaturedCard fillFieldsToFeatured={this.props.fillFieldsToFeatured}/>
        }
    }

    render() {
        if (this.props.error.length > 0){
            let error = [...this.props.error]
            let errorMessage = error[0]
            this.props.clearErrors()
            return (
                <Container className="flight-offer-cards-container">
                    <Separator px={40}/>
                    <Header as='h2'>
                        {errorMessage}
                    </Header>
                </Container>
            )
        } else {
            return (
                <Container className="flight-offer-cards-container">
                    {/* {this.props.response && !this.props.response.resolved ? <RefreshResults/> : null} */}
                    {!this.props.noRefresh ? <RefreshResults/> : null}
                    {/* {this.props.response.expected_flight_offer_count ? <RefreshResults/> : null} */}
                    {this.props.flightOffers.length > 0 && this.props.page !== 'trips' ? 
                        <FilterResults 
                            filterParams={this.state.filterParams}
                            setSortBy={this.setSortBy}
                            addExcludedAirlineCodes={this.addExcludedAirlineCodes}
                            removeExcludedAirlineCodes={this.removeExcludedAirlineCodes}
                            addOrRemoveExcludedAirlineCodes={this.addOrRemoveExcludedAirlineCodes}
                            setTravelClass={this.setTravelClass}
                            toggleNonStop={this.toggleNonStop}
                            setMaxPrice={this.setMaxPrice}
                            updateFilterParams={this.updateFilterParams}
                        /> 
                    : null}
                    {this.showFlightOffers()}
                </Container>
            )
        }
    }
}

const MSTP = state => ({
    error: state.error
})

const MDTP = { clearErrors }

export default connect(MSTP,MDTP)(FlightOffers)

