import React, { Component } from 'react'
import { Card, Form, Dropdown } from 'semantic-ui-react'

export default class FilterResults extends Component {

    handleSubmit = () => {
        
    }

    handleOnChange = () => {

    }
    
    render() {
        return (
            <Card style={{"width": "82%", "margin": "auto", "marginTop": "2.5%", "marginBottom":"2.5%"}}>
                <Form>
                    <Form.Group widths='equal'>
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

