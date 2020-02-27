import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const SelectNumberOfPeople = props => {
    return (
        <Form onClick={e => e.stopPropagation()}>
            <Button.Group onClick={e => e.stopPropagation()}>
                <Button inactive style={{"backgroundColor": "white"}}>
                    <p>{props.type.charAt(0).toUpperCase() + props.type.slice(1)}:</p>
                </Button>
                <Button 
                    name="minus" 
                    onClick={e => props.handleAddRemovePerson(e, props.type, 'minus')}
                    icon="minus circle" 
                    style={{"backgroundColor": "white"}} 
                    circular
                />
                <Button inactive style={{"backgroundColor": "white"}}>
                    <p>{props.number}</p>
                </Button>
                <Button 
                    name="plus" 
                    onClick={e => props.handleAddRemovePerson(e, props.type, 'plus')}
                    icon="plus circle" 
                    style={{"backgroundColor": "white", "spaceRight": "10px"}} 
                    circular
                />
            </Button.Group>
        </Form>
    )
}

export default SelectNumberOfPeople