import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Form, Button } from 'semantic-ui-react'
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
        let total = this.props.response.real_flight_offer_count
        return(
            <p>
                Showing {shown} of {total} results.
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
    response: state.response,
    searchResults: state.searchResults
})

const MDTP = { refreshResponse }

export default connect(MSTP, MDTP)(RefreshResults)