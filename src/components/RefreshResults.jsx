import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Label, Button, Progress } from 'semantic-ui-react'
import { refreshResponse } from '../Redux/actions/searchAndResults'

class RefreshResults extends Component {

    handleRefresh = () => {
        this.props.refreshResponse(this.props.response)
    }

    showCount = () => {
        let shown = this.props.response.resolved ? this.props.searchResults.length : this.props.searchResults.length - 1
        if (this.props.searchResults.length < 1){
            shown = 0
        }
        let total = 0
        if (this.props.response.expected_flight_offer_count){
            total = this.props.response.expected_flight_offer_count
        }
        return(
            <Button onClick={this.handleRefresh} as='div' labelPosition='left'>
                <Label as='a' pointing='right' basic>
                    {`Showing ${shown} of ${total} results.`}
                </Label>
                <Button icon>
                    Show More Flights
                </Button>
            </Button>
        )
    }

    percent = () => {
        let real = this.props.response.real_flight_offer_count
        let expected = this.props.response.expected_flight_offer_count
        return 100 * real / expected
    }

    whichProgressBarToShow = () => {
        let real = this.props.response.real_flight_offer_count
        let expected = this.props.response.expected_flight_offer_count
        let progress = <Progress percent={this.percent()} indicating/>
        if (real === expected) {
            progress = <Progress percent={this.percent()} success />
        }
        return progress
    }
    
    render() {
        return (   
            <Card style={{"width": "100%", "margin": "auto", "marginTop": "2.5%", "marginBottom":"2.5%"}}>
                <div style={{"margin":"20px"}}>
                    <Progress percent={this.percent()} indicating autoSuccess />
                    {this.showCount()}
                </div>
            </Card>
        )
    }
}

const MSTP = state => ({
    response: state.response,
    searchResults: state.searchResults
})

const MDTP = { refreshResponse }

export default connect(MSTP, MDTP)(RefreshResults)