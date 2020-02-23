import React, { Component } from 'react'
import SearchBar from './SearchBar'

export default class SearchPage extends Component {

    state={
        flightOffers: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/flight_offers/204')
        .then(r => r.json())
        .then(data => {
            console.log(data.id)
            this.setState(prevState => ({
                flightOffers: [...prevState.flightOffers, data]
            }))
        })
        .then(console.log)
    }

    showFlightOffers = () => {
        console.log(this.state.flightOffers[0])
        return (
            <p>
                {/* some text here */}
                {this.state.flightOffers.length >= 1 ? this.state.flightOffers[0].id : null }
            </p>
        )
    }
    
    render() {
        return (
            <div>
                <SearchBar/>
                {this.showFlightOffers()}
            </div>
        )
    }
}

