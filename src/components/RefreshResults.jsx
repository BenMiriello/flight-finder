import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Form, Button } from 'semantic-ui-react'
import { refreshResponse } from '../Redux/actions/searchAndResults'

class RefreshResults extends Component {

    handleRefresh = () => {
        this.props.refreshResponse(this.props.response)
        // console.log('real: ', this.props.response.real_flight_offer_count)
        // console.log('expected: ', this.props.response.expected_flight_offer_count)
    }

    showCount = () => {
        return(
            <p>
                Showing {this.props.response.real_flight_offer_count} of {this.props.response.expected_flight_offer_count} results.
            </p>
        )
    }
    
    render() {
        return (   
            <Card style={{"width": "82%", "margin": "auto", "marginTop": "2.5%", "marginBottom":"2.5%"}}>
                <Form>
                    <Form.Group widths='equal'>
                        <Button onClick={this.handleRefresh}>
                            Refresh Search Results
                        </Button>
                        {this.showCount()}
                    </Form.Group>
                </Form>
            </Card>
        )
    }
}

const MSTP = state => ({
    response: state.response
})

const MDTP = { refreshResponse }

export default connect(MSTP, MDTP)(RefreshResults)