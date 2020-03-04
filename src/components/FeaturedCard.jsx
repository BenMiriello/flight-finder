import React, { Component } from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

export default class FeaturedCard extends Component {

    handleClick = () => {
        this.props.fillFieldsToFeatured('LHR')
    }
    
    render() {
        return (
            <Card onClick={this.handleClick} style={{"width":"100%"}}>
                <Image src='https://images.unsplash.com/photo-1503780099440-e6ab046a1d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&h=700&q=100' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>London</Card.Header>
                    <Card.Meta>Featured Destination</Card.Meta>
                    {/* <Card.Description>
                        Click to view 
                    </Card.Description> */}
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        From $329
                    </a>
                </Card.Content>
            </Card>
        )
    }
}

