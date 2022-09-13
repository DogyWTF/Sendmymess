import React, { Component } from 'react';
import {
    useParams,
} from "react-router-dom";
import { getUsers, 
    getMessages, 
    addMessage, 
    changeMessage,
    getScroll,
    setScroll,
    setCloseOpenChat } from '../../redux/users/users-reducer';

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

    render() {console.log()
        return (
            <Messenger messages={this.props.messages} chats={this.props.chats} 
            getMessages={this.props.getMessages} addMessage={this.props.addMessage} 
            chatActive={this.props.chatActive} getUsers={this.props.getUsers}
            message={this.props.message} changeMessage={this.props.changeMessage}
            scroll={this.props.scroll} getScroll={this.props.getScroll} 
            setScroll={this.props.setScroll} closeOpenChat={this.props.closeOpenChat}
            setCloseOpenChat={this.props.setCloseOpenChat}/>
        );
    }
}

let mapStateToProps = (state) => ({
    chats: state.users.chats,
    messages: state.users.messages,
    chatActive: state.users.chatActive,
    message: state.users.inputMsg,
    scroll: state.users.scroll,
    closeOpenChat: state.users.closeOpenChat
})

export default connect(mapStateToProps, 
    { getUsers, 
    getMessages, 
    addMessage, 
    changeMessage,
    getScroll,
    setScroll,
    setCloseOpenChat })(withRouter(MessengerContainer))