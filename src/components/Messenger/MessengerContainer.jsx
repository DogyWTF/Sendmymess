import React, { Component } from 'react';

import Messenger from './Messenger';

import { connect } from 'react-redux';

class MessengerContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Messenger messages={this.props.messages} chats={this.props.chats}/>
        );
    }
}

let mapStateToProps = (state) => ({
    chats: state.users.chats,
    messages: state.users.messages
})

export default connect(mapStateToProps, { })(MessengerContainer)