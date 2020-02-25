import React, { Component } from 'react'
import {
  Button,
  Form,
  Input,
  Card,
//   Checkbox,
//   Radio,
//   Select,
//   TextArea,
//   Image
} from 'semantic-ui-react'

export default class SearchBar extends Component {

    // handleOnChange = (e) => {

    // }

    render() {
        return (
            <Card style={{"width": "80%", "margin": "auto", "marginTop": "5%"}}>
                <Form style={{"margin": "15px"}}>
                    <Form.Group widths='equal'>
                        <Form.Field onChange = {this.handleOnChange}
                            control={Input}
                            label='Origin'
                            placeholder='Origin'
                        />
                        <Form.Field
                            control={Input}
                            label='Destination'
                            placeholder='Destination'
                        />
                        <Form.Field
                            control={Input}
                            label='Date of Departure'
                            placeholder='Date of Departure'
                        />
                        <Form.Field
                            control={Input}
                            label='Return Date'
                            placeholder='Return Date'
                        />
                        <div style={{"textAlign": "center", "margin": "auto", "marginTop": "23px", "marginLeft": "4px"}}>
                            <Button type="submit">Search</Button>
                        </div>
                    </Form.Group>
                </Form>
            </Card>
        )
    }
}
