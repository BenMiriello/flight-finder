import React, { Component } from 'react'
import { searchForFlights } from '../Redux/actions/searchAndResults'
import { connect } from 'react-redux'
import { SelectNumberOfPeople } from '../Components/SearchBar'

import { 
    Button, 
    Form, 
    Input, 
    Card, 
    Dropdown,
    // Grid,
} from 'semantic-ui-react'

// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

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
            nonStop: false,
            maxPrice: 0
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

    handleSwitchNonStop = (e, bool) => {
        this.setState(prevState => ({
            searchParams: {
                ...prevState.searchParams, 
                nonStop: bool
            }
        }))
    }

    handleStartDateChange = date => {
        this.setState(prevState => ({
            searchParams: {
                ...prevState.searchParams, 
                startDate: date
            }
        }))
    };

    handleSelect(date){
        console.log(date)
    }

    handleSwapLocations = e => {
        e.stopPropagation() 
        this.setState(prevState => {
            return({
                ...prevState,
                searchParams: {
                    ...prevState.searchParams,
                    originLocationCode: prevState.searchParams.destinationLocationCode,
                    destinationLocationCode: prevState.searchParams.originLocationCode
                }
            })
        })
    }

    totalPassengers = () => {
        let params = this.state.searchParams
        let total = params.adults + params.children + params.infants 
        return `${total} Passenger${total === 1 ? '' : 's'}`
    }

    render() {
        return(
            <Card style={{"width": "80%", "margin": "auto", "marginTop": "5%"}}>
                <Form onSubmit = {this.handleSubmit} style={{"margin": "15px"}}>
                    <Form.Group widths='equal'>
                        <Form.Field 
                            onChange = {this.handleOnChange}
                            value={this.state.searchParams.originLocationCode}
                            control={Input}
                            name='originLocationCode'
                            label='Origin'
                            placeholder='Origin'
                        />
                        <Button
                            onClick={this.handleSwapLocations} 
                            icon={{name: "exchange", onClick:(e => e.preventDefault())}}
                            style={{"height":"38px", "width":"38px", "marginTop":"23px", "backgroundColor":"white"}}
                        />
                        <Form.Field 
                            onChange = {this.handleOnChange}
                            value={this.state.searchParams.destinationLocationCode}
                            control={Input}
                            name='destinationLocationCode'
                            label='Destination'
                            placeholder='Destination'
                        />
                        <Form.Field 
                            onChange = {this.handleOnChange}
                            value={this.state.searchParams.departureDate}
                            control={Input}
                            name='departureDate'
                            label='Departure Date'
                            placeholder='Departure Date'
                        >
                            <DatePicker
                                selected={this.state.searchParams.departureDate}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field onChange = {this.handleOnChange}
                            value={this.state.searchParams.returnDate}
                            control={Input}
                            name='returnDate'
                            label='Return Date'
                            placeholder='Return Date'
                        >
                            <DatePicker
                                selected={this.state.searchParams.departureDate}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        {/* <DateRangePicker
                            ranges={[selectionRange]}
                            onChange={this.handleSelect}
                        /> */}
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
                                <SelectNumberOfPeople number={this.state.searchParams.adults} type={'adults'}   handleAddRemovePerson={this.handleAddRemovePerson}/>
                                <SelectNumberOfPeople number={this.state.searchParams.children} type={'children'} handleAddRemovePerson={this.handleAddRemovePerson}/>
                                <SelectNumberOfPeople number={this.state.searchParams.infants} type={'infants'}  handleAddRemovePerson={this.handleAddRemovePerson}/>
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


{/* <Dropdown 
    onClick={e => e.stopPropagation()}
    text={this.state.searchParams.maxPrice > 0 ? `Max Price: ${this.state.searchParams.maxPrice}` : "Any Price"}
    style={{"marginLeft": "20px", "marginRight": "20px"}}>
    <Dropdown.Menu inactive onClick={e => e.stopPropagation()}>
        <Dropdown.Item style={{"width":"200px"}} onClick={e => e.stopPropagation()}>
            <Slider onClick={e => e.stopPropagation()}/>
        </Dropdown.Item>
    </Dropdown.Menu>
</Dropdown> */}