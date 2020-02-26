import React, { Component } from 'react'
import { searchForFlights } from '../Redux/actions/searchAndResults'
import { 
    Button, 
    Form, 
    Input, 
    Card, 
    Dropdown,
    // Grid,
} from 'semantic-ui-react'
import { connect } from 'react-redux'

class SearchBar extends Component {

    defaultState = {
        searchParams: {
            originLocationCode: '',
            destinationLocationCode: '',
            departureDate: '',
            returnDate: '',
            travelClass: 'Economy',
            adults: 1,
            children: 0,
            infants: 0,
            nonStop: false
        },
        options: {
            switchRoundTripOneWay: 'Round Trip'
        }
    }

    state = this.defaultState

    handleOnChange = e => {
        let param = e.target.name
        let value = e.target.value
        this.setState(prevState => ({
            searchParams: {
                ...prevState.searchParams,
                [param]: value
            }
        }))
    }

    handleSubmit = e => {
        e.preventDefault()
        let searchParams = {...this.state.searchParams}
        this.props.searchForFlights(searchParams)
        // this.setState(this.defaultState)
    }

    handleSwitchTravelClass = e => {
        let selection = e.target.textContent
        this.setState(prevState => ({
            searchParams: {...prevState.searchParams, travelClass: selection}
        }))
    }

    handleSwitchRoundTripOneWay = e => {
        let selection = e.target.textContent
        this.setState(prevState => ({
            options: {
                ...prevState.options, 
                switchRoundTripOneWay: selection
            }
        }))
    }

    handleAddRemovePerson = (e, type, operation) => {
        let person = type.toLowerCase()
        this.setState(prevState => ({
            searchParams: {
                ...prevState.searchParams,
                [person]: operation === "plus" ? prevState.searchParams[person] + 1 : "minus" && prevState.searchParams[person] >= 1 ? prevState.searchParams[person] - 1 : prevState.searchParams[person]
            }
        }))
    }

    handleSwitchNonStop = e => {
        this.setState(prevState => ({
            searchParams: {
                ...prevState.searchParams, 
                nonStop: !prevState.searchParams.nonStop
            }
        }))
    }

    handleSwitchNonStop = (e, bool) => {
        this.setState(prevState => ({
            searchParams: {
                ...prevState.searchParams, 
                nonStop: bool
            }
        }))
    }

    totalPassengers = () => {
        let params = this.state.searchParams
        let total = params.adults + params.children + params.infants 
        return `${total} Passenger${total === 1 ? '' : 's'}`
    }

    selectNumberOfPeople = (type) => (
        <Form onClick={e => e.stopPropagation()}>
            <Button.Group onClick={e => e.stopPropagation()}>
                <Button inactive style={{"backgroundColor": "white"}}>
                    <p>{type}:</p>
                </Button>
                <Button 
                    name="minus" 
                    onClick={e => this.handleAddRemovePerson(e, type, 'minus')}
                    icon="minus circle" 
                    style={{"backgroundColor": "white"}} 
                    circular
                />
                <Button inactive style={{"backgroundColor": "white"}}>
                    <p>{this.state.searchParams[type.toLowerCase()]}</p>
                </Button>
                <Button 
                    name="plus" 
                    onClick={e => this.handleAddRemovePerson(e, type, 'plus')}
                    icon="plus circle" 
                    style={{"backgroundColor": "white", "spaceRight": "10px"}} 
                    circular
                />
            </Button.Group>
        </Form>
    )

    render() {
        return(
            <Card style={{"width": "80%", "margin": "auto", "marginTop": "5%"}}>
                <Form onSubmit = {this.handleSubmit} style={{"margin": "15px"}}>
                    <Form.Group widths='equal'>
                        <Form.Field onChange = {this.handleOnChange}
                            value={this.state.origin}
                            control={Input}
                            name='originLocationCode'
                            label='Origin'
                            placeholder='Origin'
                        />
                        <Form.Field onChange = {this.handleOnChange}
                            value={this.state.destination}
                            control={Input}
                            name='destinationLocationCode'
                            label='Destination'
                            placeholder='Destination'
                        />
                        <Form.Field onChange = {this.handleOnChange}
                            value={this.state.departDate}
                            control={Input}
                            name='departureDate'
                            label='Depart Date'
                            placeholder='Date of Departure'
                        />
                        <Form.Field onChange = {this.handleOnChange}
                            value={this.state.returnDate}
                            control={Input}
                            name='returnDate'
                            label='Return Date'
                            placeholder='Return Date'
                        />
                        <div style={{"textAlign": "center", "margin": "auto", "marginTop": "23px", "marginLeft": "4px"}}>
                            <Button type="submit">Search</Button>
                        </div>
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group widths='equal'>
                        <Dropdown 
                            text={this.state.options.switchRoundTripOneWay} 
                            style={{"marginLeft": "20px", "marginRight": "20px"}}>
                            <Dropdown.Menu onClick={this.handleSwitchRoundTripOneWay}>
                                <Dropdown.Item text='One Way' />
                                <Dropdown.Item text='Round Trip' />
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown 
                            text={this.state.searchParams.travelClass} 
                            style={{"marginLeft": "20px", "marginRight": "20px"}}>
                            <Dropdown.Menu onClick={this.handleSwitchTravelClass}>
                                <Dropdown.Item text='Economy' />
                                <Dropdown.Item text='Premium Economy' />
                                <Dropdown.Item text='Business' />
                                <Dropdown.Item text='First Class' />
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown 
                            onClick={e => e.stopPropagation()} 
                            text={this.totalPassengers()} 
                            style={{"marginLeft": "20px", "marginRight": "20px"}}>
                            <Dropdown.Menu>
                                {this.selectNumberOfPeople('Adults')}
                                {this.selectNumberOfPeople('Children')}
                                {this.selectNumberOfPeople('Infants')}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown 
                            text={this.state.searchParams.nonStop ? "Nonstop Only" : "Allow Multiple Stops"}
                            style={{"marginLeft": "20px", "marginRight": "20px"}}>
                            <Dropdown.Menu >
                                <Dropdown.Item text='Nonstop Only' onClick={e => this.handleSwitchNonStop(e, true)}/>
                                <Dropdown.Item text='Allow Multiple Stops'onClick={e => this.handleSwitchNonStop(e, false)} />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                </Form>
            </Card>
        )
    }
}

// const MSTP = state => ({
//     queryParams: state.flights.searchParams
// })

const MDTP = dispatch => ({
    searchForFlights: () => dispatch(searchForFlights())
})

export default connect(null, MDTP)(SearchBar)

/** "https://test.api.amadeus.com/v2/shopping/flight-offers
 * ?originLocationCode=JFK
 * &destinationLocationCode=LHR
 * &departureDate=2020-10-01
 * &returnDate=2020-10-10
 * &adults=1
 * &nonStop=false
 * &max=50"
 * */ 

