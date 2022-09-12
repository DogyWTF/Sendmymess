import React, { Component } from 'react';
import {
    useParams,
} from "react-router-dom";
import { getUsers, getMessages, addMessage, changeMessage } from '../../redux/users/users-reducer';

import Messenger from './Messenger';

import { connect } from 'react-redux';

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class MessengerContainer extends Component {
    refreshMessenger() {
        this.props.getUsers()
    }
    
    componentDidMount() {
        this.refreshMessenger()
    }

    render() {
        return (
            <Messenger messages={this.props.messages} chats={this.props.chats} 
            getMessages={this.props.getMessages} addMessage={this.props.addMessage} 
            chatActive={this.props.chatActive} getUsers={this.props.getUsers}
            message={this.props.message} changeMessage={this.props.changeMessage}/>
        );
    }
}

let mapStateToProps = (state) => ({
    chats: state.users.chats,
    messages: state.users.messages,
    chatActive: state.users.chatActive,
    message: state.users.inputMsg
})

export default connect(mapStateToProps, { getUsers, getMessages, addMessage, changeMessage })(withRouter(MessengerContainer))