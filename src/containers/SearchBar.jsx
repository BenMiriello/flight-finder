import React, { Component } from 'react'
import { searchForFlights, queryTestFlights, refreshResponse } from '../Redux/actions/searchAndResults'
import { connect } from 'react-redux'
import { SelectNumberOfPeople } from '../Components/SearchBar'
import { debounce } from 'lodash'

import { 
    Button, 
    Form, 
    Input, 
    Card, 
    Dropdown,
    // Grid,
} from 'semantic-ui-react'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Separator } from '../StyleComponents/Separator'

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

    handleDateChange = (time, type) => {
        this.setState(prevState => ({
            searchParams: {
                ...prevState.searchParams,
                [type]: time
            }
        }), () => console.log(this.state.searchParams))
    }

    handleSubmit = e => {
        e.preventDefault()
        let searchParams = this.state.searchParams
        // this.props.searchForFlights(searchParams)
        this.props.queryTestFlights(searchParams)

        // debugger
        // setTimeout(this.props.refreshResponse(this.props.response), 500)
        // setTimeout(() => !this.props.response.resolved ? this.props.refreshResponse(this.props.response) : null, 1000)
        // setTimeout(() => !this.props.response.resolved ? this.props.refreshResponse(this.props.response) : null, 1500)
        // setTimeout(() => !this.props.response.resolved ? this.props.refreshResponse(this.props.response) : null, 2000)
        // setTimeout(() => !this.props.response.resolved ? this.props.refreshResponse(this.props.response) : null, 3000)
        // setTimeout(() => !this.props.response.resolved ? this.props.refreshResponse(this.props.response) : null, 5000)
        // setTimeout(() => !this.props.response.resolved ? this.props.refreshResponse(this.props.response) : null, 10000)
        // setTimeout(() => !this.props.response.resolved ? this.props.refreshResponse(this.props.response) : null, 15000)
        // setTimeout(() => !this.props.response.resolved ? this.props.refreshResponse(this.props.response) : null, 20000)
        // setTimeout(() => !this.props.response.resolved ? this.props.refreshResponse(this.props.response) : null, 30000)
        // setTimeout(() => !this.props.response.resolved ? this.props.refreshResponse(this.props.response) : null, 60000)
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
        console.log(this.props.response)
        return(
            <>
                <Separator px={20}/>
                <Card style={{"width": "90%", "margin": "auto"}}>
                    <Form onSubmit = {this.handleSubmit} style={{"margin": "15px"}}>
                        <Form.Group widths='equal'>
                            <Form.Field 
                                onChange = {this.handleOnChange}
                                value={this.state.searchParams.originLocationCode}
                                control={Input}
                                name='originLocationCode'
                                label='Origin'
                                placeholder='Origin'
                                autoComplete="off"
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
                                autoComplete="off"
                            />
                            {/* <Form.Field 
                                onChange = {this.handleOnChange}
                                value={this.state.searchParams.departureDate}
                                control={Input}
                                name='departureDate'
                                label='Departure Date'
                                placeholder='Departure Date'
                            > */}
                            <Form.Field>
                                <DatePicker
                                    name="departureDate"
                                    value={this.state.searchParams.departureDate}
                                    selected={this.state.searchParams.departureDate}
                                    dateFormat="yyyy-mm-dd"
                                    onChange={time => this.handleDateChange(time, 'departureDate')}
                                    autoComplete="off"
                                    />
                            </Form.Field>
                            <Form.Field>
                                <DatePicker
                                    name="returnDate"
                                    value={this.state.searchParams.returnDate}
                                    selected={this.state.searchParams.returnDate}
                                    dateFormat="yyyy-mm-dd"
                                    onChange={time => this.handleDateChange(time, 'returnDate')}
                                    autoComplete="off"
                                />
                            </Form.Field>
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
                                    <Dropdown.Item text='Any' />
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown
                                onClick={e => e.stopPropagation()} 
                                text={this.totalPassengers()} 
                                style={{"marginLeft": "20px", "marginRight": "20px"}}>
                                <Dropdown.Menu>
                                    <SelectNumberOfPeople 
                                        type={'adults'}   
                                        number={this.state.searchParams.adults} 
                                        handleAddRemovePerson={this.handleAddRemovePerson}
                                    />
                                    <SelectNumberOfPeople 
                                        type={'children'} 
                                        number={this.state.searchParams.children} 
                                        handleAddRemovePerson={this.handleAddRemovePerson}
                                    />
                                    <SelectNumberOfPeople 
                                        type={'infants'}  
                                        number={this.state.searchParams.infants} 
                                        handleAddRemovePerson={this.handleAddRemovePerson}
                                    />
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown 
                                text={this.state.searchParams.nonStop ? "Nonstop Only" : "Allow Multiple Stops"}
                                style={{"marginLeft": "20px", "marginRight": "20px"}}>
                                <Dropdown.Menu >
                                    <Dropdown.Item 
                                        text='Nonstop Only' 
                                        onClick={e => this.handleSwitchNonStop(e, true)}
                                    />
                                    <Dropdown.Item 
                                        text='Allow Multiple Stops'
                                        onClick={e => this.handleSwitchNonStop(e, false)} 
                                    />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                    </Form>
                </Card>
                {/* <Separator px={20}/> */}
            </>
        )
    }
}

const MSTP = state => ({
    response: state.response
})

const MDTP = dispatch => ({
    searchForFlights: (searchParams) => dispatch(searchForFlights(searchParams)),
    queryTestFlights: (searchParams) => dispatch(queryTestFlights(searchParams)),
    refreshResponse: (response) => dispatch(refreshResponse(response))
})

export default connect(MSTP, MDTP)(SearchBar)

