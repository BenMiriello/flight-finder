import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Label, Button, Progress } from 'semantic-ui-react'
import { refreshResponse } from '../Redux/actions/searchAndResults'

class RefreshResults extends Component {

    state = {
        loading: false
    }
    
    handleRefresh = () => {
        this.props.refreshResponse(this.props.response)
        this.setState({loading: true})
        setTimeout(() => {
            this.setState({loading: false})
        }, 1500);
    }

    showButton = () => {
        return(
            <Button onClick={this.handleRefresh} as='div' labelPosition='left'>
                <Label as='a' pointing='right' basic>
                    {`Showing ${this.props.real? this.props.real : 0} of ${this.props.expected ? this.props.expected : 0} results.`}
                </Label>
                {this.state.loading ? <Button disabled>Show More Flights</Button> : <Button>Show More Flights</Button>}
            </Button>
        )
    }

    refreshButton = () => {
        if (this.props.response.expected_flight_offer_count){
            if (!this.props.response.resolved) {
                return this.showButton()
            } else {
                return(
                    <div style={{"margin":"20px", "margin":"auto"}}>
                        <p>
                            Showing all {this.props.real} results.
                        </p>
                    </div>
                )
            }
        }
    }

    percent = () => {
        return 100 * this.props.real / this.props.expected
    }

    whichProgressBarToShow = () => {
        let progress = <Progress percent={this.percent()} indicating/>
        if (this.props.real === this.props.expected) {
            progress = <Progress percent={this.percent()} success />
        }
        return progress
    }
    
    render() {
        return (   
            <Card style={{"width": "100%", "margin": "auto", "marginTop": "2.5%", "marginBottom":"2.5%"}}>
                <div style={{"margin":"20px"}}>
                    <Progress percent={this.percent()} indicating autoSuccess />
                    {this.refreshButton()}
                </div>
            </Card>
        )
    }
}

const MSTP = state => ({
    response: state.response,
    searchResults: state.searchResults,
    real: state.response.real_flight_offer_count,
    expected: state.response.expected_flight_offer_count
})

const MDTP = { refreshResponse }

export default connect(MSTP, MDTP)(RefreshResults)