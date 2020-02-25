import React, { Component } from 'react'
import { Grid, Card, Item, Image, Button, Icon } from 'semantic-ui-react'
import { postPurchase, postFavorite, deletePurchase, deleteFavorite } from '../Redux/actions/favoriteAndPurchase'
import { connect } from 'react-redux'

export class FlightOfferCard extends Component {

    handleClick = (e, {name}) => {
        // console.log('e: ', e);
        // console.log('name: ', name);
        // console.log('this.props.flightOffer: ', this.props.flightOffer);
        switch(name) {
            case "add favorite":
                this.props.postFavorite(this.props.flightOffer)
                break
            case "add purchase":
                this.props.postPurchase(this.props.flightOffer)
                break
            case "remove favorite":
                this.props.deleteFavorite(this.props.flightOffer)
                break
            case "remove purchase":
                this.props.deletePurchase(this.props.flightOffer)
                break
            default:
                break
        }
    }

    infoRow = (leg) => {
        let segments = this.props.flightOffer.itineraries[leg].segments

        let stops = segments.length - 1
        let carrierCode = segments[0].carrier_code
        let carrier = segments[0].carrier.toLowerCase().replace(/^\w/, c => c.toUpperCase())
        let duration = segments[0].duration.substring(2).toLowerCase()
        
        
        let departureStrEnd = parseInt((segments[0].departure_time.substring(11).split(":"))[0]) > 12 ? 17 : 16
        let departureTime = segments[0].departure_time.substring(11, departureStrEnd)
        let arrivalStrEnd = parseInt((segments[0].departure_time.substring(11).split(":"))[0]) > 12 ? 17 : 16
        let arrivalTime = segments[segments.length - 1].arrival_time.substring(11, arrivalStrEnd)

        let departure24Hour = parseInt((departureTime.split(":"))[0])
        let departure12Hour = departure24Hour > 12 ? departure24Hour - 12 : departure24Hour
        let departureMinute = parseInt((departureTime.split(":"))[1])
        let departureAmPm = departure24Hour >= 12 ? "pm" : "am"

        let arrival24Hour = parseInt((arrivalTime.split(":"))[0])
        let arrival12Hour = arrival24Hour > 12 ? arrival24Hour - 12 : arrival24Hour
        let arrivalMinute = parseInt((arrivalTime.split(":"))[1])
        let arrivalAmPm = arrival24Hour >= 12 ? "pm" : "am"

        return(
            <>
                <Item className="foci foci-carrier-icon">
                    <div className="vertical-center" style={{"padding":"5px"}}>
                        <Image src={`https://www.gstatic.com/flights/airline_logos/32px/${carrierCode}.png`}/>
                    </div>
                </Item>
                <Item className="foci foci-times" >
                    <div className="vertical-center">
                        <p className="foci-text">
                            {departure12Hour}:{departureMinute} {departureAmPm} - {arrival12Hour}:{arrivalMinute} {arrivalAmPm}
                            {/* {this.formatAMPM(segments[0].departure_time)} - {this.formatAMPM(segments[0].departure_time)}  */}
                        </p>
                        <div className="flight-offer-card-flex-container sub-flex">
                            <p className="foci-text">{carrier}</p>
                        </div>
                    </div>
                </Item>
                <Item className="foci foci-legs">
                    <div className="vertical-center">
                        <p className="foci-text">{stops === 0 ? "non" : stops + " "}stop{stops >= 2 ? "s" : ""}</p>
                        {stops >= 1 ?   
                            <div className="flight-offer-card-flex-container sub-flex">
                                <p className="foci-text">{segments[0].arrival_iata}</p>
                            </div>
                        : null
                        }
                    </div>
                </Item>
                <Item className="foci foci-duration">
                    <div className="vertical-center">
                        <p className="foci-text">{duration}</p>
                        <div className="flight-offer-card-flex-container sub-flex">
                        <p className="foci-text">{segments[0].departure_iata} - {segments[segments.length - 1].arrival_iata}</p>
                        </div>
                    </div>
                </Item>
            </>
        )
    }

    favoriteButton = () => {
        if (this.props.favorited_flight_offers && this.props.favorited_flight_offers.length > 0 && this.props.favorited_flight_offers.some(fo => fo.id === this.props.flightOffer.id)){
            return <Button onClick={this.handleClick} name="remove favorite" circular icon={{color: "red", name: "heart"}} />
        } else {
            return <Button onClick={this.handleClick} name="add favorite" circular icon='heart outline' />
        }
    }

    purchaseButton = () => {
        if (this.props.purchased_flight_offers && this.props.purchased_flight_offers.length > 0 && this.props.purchased_flight_offers.some(fo => fo.id === this.props.flightOffer.id)){
            return <Button onClick={this.handleClick} name="remove purchase" color='green' >Cancel Flight</Button>
        } else {
            return <Button onClick={this.handleClick} name="add purchase" color='blue' >Book Flight</Button>
        }
    }

    render() {
        let [to, from] = ["0", "1"]
        return (
            <Card className="flight-offer-card" style={{"margin": "auto", "width": "82%"}}>
                <Grid columns={2}>
                    <Grid.Column width={13}>
                        <div className="flight-offer-card-flex-container">
                            {this.infoRow(to)}
                            {this.infoRow(from)}
                        </div>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <div className="flight-offer-card-right">
                            <div className="flight-offer-card-right-item" style={{"top": "10px","position": "relative"}}>
                                {this.favoriteButton()}
                            </div>
                            <div className="flight-offer-card-right-item ">
                                <p className="foci-text vertical-center">${this.props.flightOffer.grand_total}</p>
                            </div>
                            <div className="flight-offer-card-right-item">
                                {this.purchaseButton()}
                            </div>
                        </div>
                    </Grid.Column>
                </Grid>
            </Card>
        )
    }
}

const MSTP = state => {
    const user = state.userInfo.user
    let favorited_flight_offers = user ? user.favorited_flight_offers : []
    let purchased_flight_offers = user ? user.purchased_flight_offers : []
    
    return {
        favorited_flight_offers: favorited_flight_offers,
        purchased_flight_offers: purchased_flight_offers
    }
}

const MDTP = {
    postPurchase,
    postFavorite,
    deletePurchase,
    deleteFavorite
}

export default connect(MSTP, MDTP)(FlightOfferCard)

