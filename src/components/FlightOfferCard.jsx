import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Card, Item, Image, Button } from 'semantic-ui-react'
import { postPurchase, postFavorite, deletePurchase, deleteFavorite } from '../Redux/actions/favoriteAndPurchase'

const FlightOfferCard = props => {

    const favorited_flight_offers = useSelector(state => state.userInfo.user.favorited_flight_offers)
    const purchased_flight_offers = useSelector(state => state.userInfo.user.purchased_flight_offers)
    const dispatch = useDispatch()

    const handleClick = (e, {name}) => {
        switch(name) {
            case "add favorite":
                dispatch(postFavorite(props.flightOffer))
                break
            case "add purchase":
                dispatch(postPurchase(props.flightOffer))
                break
            case "remove favorite":
                dispatch(deleteFavorite(props.flightOffer))
                break
            case "remove purchase":
                dispatch(deletePurchase(props.flightOffer))
                break
            default:
                break
        }
    }

    itineraries: Array(2)
// 0:
// id: 3305
// duration: "PT6H50M"
// segments: Array(1)
// 0:
// id: 4345
// itinerary_id: 3305
// departure_terminal: "7"
// departure_time: "2020-10-01T07:55:00.000Z"
// arrival_terminal: "5"
// arrival_time: "2020-10-01T19:45:00.000Z"
// flight_number: "5478"
// aircraft_code: "744"
// aircraft: "BOEING 747-400"
// duration: "PT6H50M"
// number_of_stops: 0
// airline:
// id: 44
// name: "Finnair"
// iata_code: "AY"
// __proto__: Object
// operating_airline:
// id: 54
// name: "British Airways"
// iata_code: "BA"
// __proto__: Object
// origin:
// id: 216
// name: "John F Kennedy Intl"
// iata_code: "JFK"
// icao_code: "KJFK"
// latitude: "40.639751"
// longitude: "-73.778925"
// alias: null
// dst: null
// destinations: 162
// city_id: 216
// created_at: "2020-02-29T23:49:06.372Z"
// updated_at: "2020-02-29T23:49:06.372Z"

    const infoRow = (leg) => {
        // debugger
        let segments = props.flightOffer.itineraries[leg].segments

        let stops = segments.length - 1
        let carrierCode = segments[0].airline.iata_code
        let carrier = segments[0].airline.name.toLowerCase().replace(/^\w/, c => c.toUpperCase())
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
                            {/* {formatAMPM(segments[0].departure_time)} - {formatAMPM(segments[0].departure_time)}  */}
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
                                <p className="foci-text">{segments[0].destination.iata_code}</p>
                            </div>
                        : null
                        }
                    </div>
                </Item>
                <Item className="foci foci-duration">
                    <div className="vertical-center">
                        <p className="foci-text">{duration}</p>
                        <div className="flight-offer-card-flex-container sub-flex">
                        <p className="foci-text">{segments[0].origin.iata_code} - {segments[segments.length - 1].destination.iata_code}</p>
                        </div>
                    </div>
                </Item>
            </>
        )
    }

    const favoriteButton = () => {
        if (favorited_flight_offers && favorited_flight_offers.length > 0 && favorited_flight_offers.some(fo => fo.id === props.flightOffer.id)){
            return <Button onClick={handleClick} name="remove favorite" circular icon={{color: "red", name: "heart"}} />
        } else {
            return <Button onClick={handleClick} name="add favorite" circular icon='heart outline' />
        }
    }

    const purchaseButton = () => {
        if (purchased_flight_offers && purchased_flight_offers.length > 0 && purchased_flight_offers.some(fo => fo.id === props.flightOffer.id)){
            return <Button onClick={handleClick} name="remove purchase" color='green'>Cancel Flight</Button>
        } else {
            return <Button onClick={handleClick} name="add purchase" color='blue'>Book Flight</Button>
        }
    }

    const [to, from] = ["0", "1"]

    return (
        <Card className="flight-offer-card" style={{"margin": "auto", "width": "82%"}}>
            <Grid columns={2}>
                <Grid.Column width={13}>
                    <div className="flight-offer-card-flex-container">
                        {infoRow(to)}
                        {infoRow(from)}
                    </div>
                </Grid.Column>
                <Grid.Column width={3}>
                    <div className="flight-offer-card-right">
                        <div className="flight-offer-card-right-item" style={{"top": "10px","position": "relative"}}>
                            {favoriteButton()}
                        </div>
                        <div className="flight-offer-card-right-item ">
                            <p className="foci-text vertical-center">${props.flightOffer.grand_total}</p>
                        </div>
                        <div className="flight-offer-card-right-item">
                            {purchaseButton()}
                        </div>
                    </div>
                </Grid.Column>
            </Grid>
        </Card>
    )
}

export default FlightOfferCard

