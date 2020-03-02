import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Form, Icon, Checkbox, Accordion } from 'semantic-ui-react'

class FilterResults extends Component {

    state = {
        activeIndex: -1,
    }

    handleChangeAirlineOptions = (e, iata) => {
        // console.log(e.currentTarget.tabIndex);
        // if (e.currentTarget.tabIndex === -1){
            this.props.addOrRemoveExcludedAirlineCodes(iata)
        // }
    }
    
    airlineOptions = () => {
        if (this.props.response.airlines){
            return this.props.response.airlines.map(airline => 
                <Checkbox 
                    label={airline.name} 
                    defaultChecked 
                    onChange={(e) => this.handleChangeAirlineOptions(e, airline.iata_code)}
                />
            )
        }
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
    }

    airlinesAccordion = () => {
        const { activeIndex } = this.state
        return(
            <Accordion>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                    // fix this to close when focus changes.
                    onBlur={() => this.setState({activeIndex: -1})}
                >
                    <Icon name='dropdown'/>
                    Included Airlines
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <Form>
                        <Form.Group widths='equal'>
                            {this.airlineOptions()}
                        </Form.Group>
                    </Form>
                </Accordion.Content>
            </Accordion>
        )
    }

    render(){
        return(
            <Card style={{"width": "82%", "margin": "auto", "marginTop": "2.5%", "marginBottom":"2.5%"}}>
                {this.airlinesAccordion()}
            </Card>
        )
    }
}

const MSTP = state => ({
    response: state.response
})

export default connect(MSTP)(FilterResults)

    // airlineOptions = () => {
    //     console.log(this.props);
    //     if (this.props.response.airlines){
    //         return this.props.response.airlines.map(airline => 
    //             (
    //                 <Dropdown.Item onClick={e => e.stopPropagation()}>
    //                     <Checkbox label={airline.name} defaultChecked />
    //                 </Dropdown.Item>
    //             )
    //         )
    //     } else return
    // }
    
    // render() {
    //     console.log(this.props.response)
    //     return (
    //         <Card style={{"width": "82%", "margin": "auto", "marginTop": "2.5%", "marginBottom":"2.5%"}}>
    //             <Form>
    //                 <Form.Group widths='equal'>
    //                     <Dropdown 
    //                         text={`Included Airlines`}
    //                         style={{"marginLeft": "20px", "marginRight": "20px"}}>
    //                         <Dropdown.Menu>
    //                             {this.airlineOptions()}
    //                         </Dropdown.Menu>
    //                     </Dropdown>
    //                 </Form.Group>
    //             </Form>
    //         </Card>
    //     )
    // }