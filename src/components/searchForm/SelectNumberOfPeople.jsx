import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class SelectNumberOfPeople extends Component {
    render() {
        return (
            <Form onClick={e => e.stopPropagation()}>
                <Button.Group onClick={e => e.stopPropagation()}>
                    <Button inactive style={{"backgroundColor": "white"}}>
                        <p>{this.props.type}:</p>
                    </Button>
                    <Button 
                        name="minus" 
                        onClick={e => this.props.handleAddRemovePerson(e, this.props.type, 'minus')}
                        icon="minus circle" 
                        style={{"backgroundColor": "white"}} 
                        circular
                    />
                    <Button inactive style={{"backgroundColor": "white"}}>
                        <p>{this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1)}</p>
                    </Button>
                    <Button 
                        name="plus" 
                        onClick={e => this.props.handleAddRemovePerson(e, this.props.type, 'plus')}
                        icon="plus circle" 
                        style={{"backgroundColor": "white", "spaceRight": "10px"}} 
                        circular
                    />
                </Button.Group>
            </Form>
        )
    }
}
