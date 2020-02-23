import React, { Component } from 'react'
import { Grid, Card, Item, Image, Button } from 'semantic-ui-react'
import { addFlightOfferToPurchases, addFlightOfferToFavorites } from '../Redux/actions/index'
import { connect } from 'react-redux'

export class FlightOfferCard extends Component {

    handleItemClick = (e, { name }) => {
        switch(name) {
            case "favorite":
                this.props.addFlightOfferToFavorites(this.props.flightOffer)
                break
            case "book flight":
                this.props.addFlightOfferToPurchases(this.props.flightOffer)
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

        let departureTime = segments[0].departure_time.substring(11, 16)
        let arrivalTime = segments[segments.length - 1].arrival_time.substring(11, 16)

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
                        :
                            null
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

    render() {
        let [to, from] = ["0", "1"]
        return (
            <Card className="flight-offer-card" style={{"margin": "auto", "width": "82%"}} >
                <Grid columns={2}>
                    <Grid.Column color="white" width={13}>
                        <div className="flight-offer-card-flex-container">
                            {this.infoRow(to)}
                            {this.infoRow(from)}
                        </div>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <div className="flight-offer-card-right">
                            <div className="flight-offer-card-right-item" style={{"top": "10px","position": "relative"}}>
                                <Button name="favorite" circular icon='heart outline' onClick={this.handleClick}/>
                            </div>
                            <div className="flight-offer-card-right-item ">
                                <p className="foci-text vertical-center">${this.props.flightOffer.grand_total}</p>
                            </div>
                            <div className="flight-offer-card-right-item" >
                                <Button name="book flight" onClick={this.handleClick}>Book Flight</Button>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid>
            </Card>
        )
    }
}

const MSTP = state => ({

})

const MDTP = dispatch => ({
    addFlightOfferToPurchases: () => dispatch(addFlightOfferToPurchases()),
    addFlightOfferToFavorites: () => dispatch(addFlightOfferToFavorites())
})

export default connect(MSTP, MDTP)(FlightOfferCard)

// props from flight card:  
// {flightOffer: {…}}
//     flightOffer:
//         one_way: false
//         currency: "EURO"
//         grand_total: 329
//         fare_type: "PUBLISHED"
//         validating_airline_codes: "AY"

//         itineraries: Array(2)
//             0:
//                 id: 407
//                 duration: "PT6H50M"
//                 segments: Array(1)
//                     0:
//                         id: 526
//                         itinerary_id: 407
//                         departure_iata: "JFK"
//                         departure_city_code: "NYC"
//                         departure_country_code: "US"
//                         departure_terminal: "7"
//                         departure_time: "2020-10-01T07:55:00.000Z"
//                         arrival_iata: "LHR"
//                         arrival_city_code: "LON"
//                         arrival_country_code: "GB"
//                         arrival_terminal: "5"
//                         arrival_time: "2020-10-01T19:45:00.000Z"
//                         carrier_code: "AY"
//                         carrier: "FINNAIR"
//                         flight_number: "5478"
//                         aircraft_code: "744"
//                         aircraft: "BOEING 747-400"
//                         operating_carrier_code: "BA"
//                         operating_carrier: null
//                         duration: "PT6H50M"
//                         xid: 8
//                         number_of_stops: 0
//                         blacklisted_in_eu: false
//                         created_at: "2020-02-22T22:55:27.810Z"
//                         updated_at: "2020-02-22T22:55:27.810Z"
//                         __proto__: Object
//                     length: 1
//                     __proto__: Array(0)
//                 __proto__: Object
//             1:
//                 id: 408
//                 duration: "PT11H55M"
//                 segments: Array(2)
//                     0:
//                         id: 527
//                         itinerary_id: 408
//                         departure_iata: "LHR"
//                         departure_city_code: "LON"
//                         departure_country_code: "GB"
//                         departure_terminal: "5"
//                         departure_time: "2020-10-10T07:20:00.000Z"
//                         arrival_iata: "MAD"
//                         arrival_city_code: "MAD"
//                         arrival_country_code: "ES"
//                         arrival_terminal: "4S"
//                         arrival_time: "2020-10-10T10:50:00.000Z"
//                         carrier_code: "IB"
//                         carrier: "IBERIA"
//                         flight_number: "7460"
//                         aircraft_code: "320"
//                         aircraft: "AIRBUS INDUSTRIE A320-100/200"
//                         operating_carrier_code: "BA"
//                         operating_carrier: null
//                         duration: "PT2H30M"
//                         xid: 21
//                         number_of_stops: 0
//                         blacklisted_in_eu: false
//                         created_at: "2020-02-22T22:55:27.832Z"
//                         updated_at: "2020-02-22T22:55:27.832Z"
//                         __proto__: Object
//                     1:
//                         id: 528
//                         itinerary_id: 408
//                         departure_iata: "MAD"
//                         departure_city_code: "MAD"
//                         departure_country_code: "ES"
//                         departure_terminal: "4S"
//                         departure_time: "2020-10-10T12:20:00.000Z"
//                         arrival_iata: "JFK"
//                         arrival_city_code: "NYC"
//                         arrival_country_code: "US"
//                         arrival_terminal: "7"
//                         arrival_time: "2020-10-10T14:15:00.000Z"
//                         carrier_code: "IB"
//                         carrier: "IBERIA"
//                         flight_number: "6251"
//                         aircraft_code: "359"
//                         aircraft: "AIRBUS INDUSTRIE A350-900"
//                         operating_carrier_code: "IB"
//                         operating_carrier: null
//                         duration: "PT7H55M"
//                         xid: 22
//                         number_of_stops: 0
//                         blacklisted_in_eu: false
//                         created_at: "2020-02-22T22:55:27.844Z"
//                         updated_at: "2020-02-22T22:55:27.844Z"
//                         __proto__: Object
//                     length: 2
//                     __proto__: Array(0)
//                 __proto__: Object
//             length: 2
//             __proto__: Array(0)

//         travelers: Array(1)
//             0:
//                 id: 204
//                 traveler_type: "ADULT"
//                 currency_code: "EUR"
//                 currency: "EURO"
//                 total: 329
//                 traveler_segments: Array(3)
//                     0:
//                         id: 1
//                         traveler_id: 204
//                         segment_id: 526
//                         segment_xid: 8
//                         cabin: "ECONOMY"
//                         fare_basis: "OLN8C7B5"
//                         branded_fare: "NOBAG"
//                         rbd_class: "O"
//                         included_checked_bags_quantity: 0
//                         created_at: "2020-02-22T22:55:27.888Z"
//                         updated_at: "2020-02-22T22:55:27.888Z"
//                         __proto__: Object
//                     1:
//                         id: 2
//                         traveler_id: 204
//                         segment_id: 527
//                         segment_xid: 21
//                         cabin: "ECONOMY"
//                         fare_basis: "OLN8C7B5"
//                         branded_fare: "NOBAG"
//                         rbd_class: "O"
//                         included_checked_bags_quantity: 0
//                         created_at: "2020-02-22T22:55:27.894Z"
//                         updated_at: "2020-02-22T22:55:27.894Z"
//                         __proto__: Object
//                     2:
//                         id: 3
//                         traveler_id: 204
//                         segment_id: 528
//                         segment_xid: 22
//                         cabin: "ECONOMY"
//                         fare_basis: "OLN8C7B5"
//                         branded_fare: "NOBAG"
//                         rbd_class: "O"
//                         included_checked_bags_quantity: 0
//                         created_at: "2020-02-22T22:55:27.900Z"
//                         updated_at: "2020-02-22T22:55:27.900Z"
//                         __proto__: Object
//                     length: 3
//                     __proto__: Array(0)
//                 __proto__: Object
//             length: 1
//             __proto__: Array(0)
//         __proto__: Object
//     __proto__: Object



{/* <Item className="flight-offer-card-item" />
    {/* <Item.Image size='small' src='https://images.unsplash.com/photo-1503780099440-e6ab046a1d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=100' /> */}

{/* <Item className="foci foci-50" />
<Item className="foci foci-50" />
<Item className="foci" /> */}

// .foci-carrier-icon {
//   width: 44px
// .foci-times {
//   width: 25%;
// .foci-legs {
//   width: 12%
// .foci-duration {
//   width: 12%
// .carrier-icon

