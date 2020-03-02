import React, { Component } from 'react'
import { Grid, Segment, Image } from 'semantic-ui-react'
import { Separator } from '../StyleComponents/Separator'

export default class SegmentDetails extends Component {
    render() {
        debugger
        const FO = this.props.flightOffer
        const segment = this.props.segment

        let duration = segment.duration.substring(2).toLowerCase()
        
        let departureStrEnd = parseInt((segment.departure_time.substring(11).split(":"))[0]) > 12 ? 17 : 16
        let departureTime = segment.departure_time.substring(11, departureStrEnd)
        let arrivalStrEnd = parseInt((segment.departure_time.substring(11).split(":"))[0]) > 12 ? 17 : 16
        let arrivalTime = segment.arrival_time.substring(11, arrivalStrEnd)

        let departure24Hour = parseInt((departureTime.split(":"))[0])
        let departure12Hour = departure24Hour > 12 ? departure24Hour - 12 : departure24Hour
        let departureMinute = parseInt((departureTime.split(":"))[1])
        let departureAmPm = departure24Hour >= 12 ? "pm" : "am"

        let arrival24Hour = parseInt((arrivalTime.split(":"))[0])
        let arrival12Hour = arrival24Hour > 12 ? arrival24Hour - 12 : arrival24Hour
        let arrivalMinute = parseInt((arrivalTime.split(":"))[1])
        let arrivalAmPm = arrival24Hour >= 12 ? "pm" : "am"


        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={4} >
                        <Segment vertical>
                            <Image src={`https://www.gstatic.com/flights/airline_logos/70px/${segment.airline.iata_code}.png`}/>
                        </Segment>
                        <Segment vertical>
                            <p>
                                {segment.airline.name}
                            </p>
                        </Segment>
                        <Segment vertical>
                            <p>
                                Operated by {segment.operating_airline.name}
                            </p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={10} >
                        <Segment vertical>
                            <p>
                                Departing {departure12Hour}:{departureMinute} {departureAmPm}
                            </p>
                        </Segment>
                        <Segment vertical>
                            <p>
                                From {segment.origin.airport.name}
                            </p>
                        </Segment>
                        <Segment vertical>
                            <p>
                                Terminal {segment.departure_terminal}
                            </p>
                        </Segment>
                        <Segment vertical>
                            <p>
                                {segment.origin.city.name}, {segment.origin.country.name}
                            </p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={4} >
                        <Segment vertical>
                            <p>
                                Arriving {arrival12Hour}:{arrivalMinute} {arrivalAmPm}
                            </p>
                        </Segment>
                        <Segment vertical>
                            <p>
                                At {segment.destination.airport.name}
                            </p>
                        </Segment>
                        <Segment vertical>
                            <p>
                                Terminal {segment.arrival_terminal}
                            </p>
                        </Segment>
                        <Segment vertical>
                            <p>
                                {segment.destination.city.name}, {segment.destination.country.name}
                            </p>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                {/* <Grid.Column>
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
                </Grid.Column>
                <Grid.Column width={4}>
                    <Item className="foci foci-legs">
                        <div className="vertical-center">
                            <p className="foci-text">{stops === 0 ? "non" : stops + " "}stop{stops >= 2 ? "s" : ""}</p>
                            {stops >= 1 ?   
                                <div className="flight-offer-card-flex-container sub-flex">
                                    <p className="foci-text">{segments[0].destination.iata_code}</p>
                                </div>
                            : null
                            }
                        </div>
                    </Item>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Item className="foci foci-duration">
                        <div className="vertical-center">
                            <p className="foci-text">{duration}</p>
                            <div className="flight-offer-card-flex-container sub-flex">
                            <p className="foci-text">{segments[0].origin.iata_code} - {segments[segments.length - 1].destination.iata_code}</p>
                            </div>
                        </div>
                    </Item>
                </Grid.Column>
                <Grid.Column width={4} >
                    <div className="flight-offer-card-right">
                        <div className="flight-offer-card-right-item ">
                            <p className="foci-text vertical-center">
                                Test filler
                            </p>
                        </div>
                    </div>
                </Grid.Column> */}
            </Grid>
        )
    }
}


    // Array(50)
    // 0:
    // id: 9153
    // one_way: false
    // currency: "EURO"
    // grand_total: 329
    // fare_type: "PUBLISHED"
    // validating_airline_codes: "AY"
    // itineraries: Array(2)
    // 0:
    // id: 18304
    // duration: "PT6H50M"
    // segments: [{…}]
    // __proto__: Object
    // 1:
    // id: 18305
    // duration: "PT11H55M"
    // segments: Array(2)


    // 0:
    // id: 23610
    // itinerary_id: 18305
    // departure_terminal: "5"
    // departure_time: "2020-10-10T07:20:00.000Z"
    // arrival_terminal: "4S"
    // arrival_time: "2020-10-10T10:50:00.000Z"
    // flight_number: "7460"
    // aircraft_code: "320"
    // aircraft: "AIRBUS INDUSTRIE A320-100/200"
    // duration: "PT2H30M"
    // number_of_stops: 0
    // airline: {id: 30, name: "Iberia", iata_code: "IB"}
    // operating_airline: {id: 54, name: "British Airways", iata_code: "BA"}
    // origin: {id: 2468, name: "Heathrow", iata_code: "LHR", icao_code: "EGLL", latitude: "51.4775", …}
    // destination: {airport: {…}, city: {…}, country: {…}}
    // __proto__: Object
    // 1: {id: 23611, itinerary_id: 18305, departure_terminal: "4S", departure_time: "2020-10-10T12:20:00.000Z", arrival_terminal: "7", …}
    // length: 2
    // __proto__: Array(0)
    // __proto__: Object
    // length: 2
    // __proto__: Array(0)
    // travelers: Array(1)
    // 0:
    // id: 9151
    // traveler_type: "ADULT"
    // currency_code: "EUR"
    // currency: "EURO"
    // total: 329
    // traveler_segments: Array(3)
    // 0:
    // id: 23608
    // traveler_id: 9151
    // segment_id: 23609
    // segment_xid: null
    // cabin: "ECONOMY"
    // fare_basis: "OLN8C7B5"
    // branded_fare: "NOBAG"
    // rbd_class: "O"
    // included_checked_bags_quantity: 0
    // created_at: "2020-03-02T21:08:10.115Z"
    // updated_at: "2020-03-02T21:08:10.115Z"