import React, { Component } from 'react'
import { Grid, Segment, Image, Header } from 'semantic-ui-react'

export default class SegmentDetails extends Component {
    render() {
        // debugger
        // const FO = this.props.flightOffer
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
            <>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header as='h3' textAlign="center">
                            <div >
                                {segment.origin.city.name} - {segment.destination.city.name}
                            </div>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={3} >
                        <Segment vertical>
                            <Image src={`https://www.gstatic.com/flights/airline_logos/70px/${segment.airline.iata_code}.png`}/>
                            {segment.airline.name}
                        </Segment>
                        <Segment vertical>
                            Operated by {segment.operating_airline.name}
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={11} >
                        <Segment vertical>
                            Departing {departure12Hour}:{departureMinute} {departureAmPm} from {segment.origin.airport.name} Airport terminal {segment.departure_terminal} {segment.origin.city.name}, {segment.origin.country.name}
                        </Segment>
                        <Segment vertical>
                            Arriving {arrival12Hour}:{arrivalMinute} {arrivalAmPm} at {segment.destination.airport.name} Airport terminal {segment.arrival_terminal} {segment.destination.city.name}, {segment.destination.country.name}
                        </Segment>
                        <Segment.Group horizontal>
                            <Segment basic>
                                <Header as='h5'>Flight No.</Header>
                                {segment.flight_number}
                            </Segment>
                            <Segment basic>
                                <Header as='h5'>Duration</Header>
                                {duration}
                            </Segment>
                            <Segment basic>
                                <Header as='h5'>Aircraft</Header>
                                {segment.aircraft}
                            </Segment>
                        </Segment.Group>
                    </Grid.Column>
                    <Grid.Column width={1}></Grid.Column>
                </Grid.Row>
            </Grid>
            </>
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