import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Form, Dropdown, Button } from 'semantic-ui-react'
import { refreshResponse } from '../Redux/actions/searchAndResults'

class FilterResults extends Component {

    handleSubmit = () => {
    }

    handleOnChange = () => {
    }

    handleRefresh = () => {
        // debugger
        this.props.refreshResponse(this.props.response)
    }
    
    render() {
        return (
            <Card style={{"width": "82%", "margin": "auto", "marginTop": "2.5%", "marginBottom":"2.5%"}}>
                <Form>
                    <Form.Group widths='equal'>
                        <Button text='Refresh Search Results' onClick={this.handleRefresh}/>
                        <Dropdown 
                            text={`Included Airlines`}
                            style={{"marginLeft": "20px", "marginRight": "20px"}}>
                            <Dropdown.Menu>
                                <Dropdown.Item text='Economy' />
                                <Dropdown.Item text='Premium Economy' />
                                <Dropdown.Item text='Business' />
                                <Dropdown.Item text='First Class' />
                                <Dropdown.Item text='Any' />
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown
                            text={`Excluded Airlines`}
                        >

                        </Dropdown>
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

export default connect(MSTP, MDTP)(FilterResults)