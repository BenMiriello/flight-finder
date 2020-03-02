import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Header, Button } from 'semantic-ui-react'
import { loadLastQuery } from '../Redux/actions/searchAndResults'
// import queryReducer from '../Redux/reducers/queryReducer'

class Profile extends Component {

    state = {
        searchButtonText: "Load last search"
    }

    handleClick = e => {
        // else if (this.props.loadLastQuery(this.props.user)){
        this.setState({searchButtonText: "new text"})
        // }
    }

    componentDidUpdate(){
        debugger
        // if (!this.props.query.queryParams && !localStorage.query && !this.props.loadLastQuery(user)){
        //     this.state.searchButtonText = "Make your first search"
        // }
    }
    
    render() {
        // debugger
        return (
            <>
                <Header as='h1' style={{ "textAlign": "center" }}>Welcome, {this.props.username}!</Header>
                {/* <div> */}
                    <Button onClick={this.handleClick} style={{"display":"block","marginLeft":"auto","marginRight":"auto","marginTop":"50px"}}>
                        {this.state.searchButtonText}
                    </Button>
                {/* </div> */}
            </>
        )
    }
}

const MSTP = state => ({
    user: state.userInfo.user,
    query: state.query
})

const MDTP = ({
    loadLastQuery
})

export default withRouter(connect(MSTP, MDTP)(Profile))

