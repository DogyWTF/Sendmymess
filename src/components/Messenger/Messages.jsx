import React from 'react';

import light from "./Messenger_light.module.scss"
import Message from './Message/Message'
import Date from './Message/Date';
import TextInput from '../common/TextInput/TextInput';

// img

// light img
import setting_light from './../../assets/img/light/setting.png';


//

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.s = light

        this.chat = ""

        this.classMenuIsOpen = "Messenger_light_menu_btn__YPBRP"
    }

    _handleScroll(ev) {
        if (!!this) {
            this.props.setScroll(this.props.chatActive, ev.target.scrollTop)
            console.log(this.props.scroll)
        }
    }

    onClickBtn() {
        if (this.props.closeOpenChat === true) {
            this.props.setCloseOpenChat(false)
            this.classMenuIsOpen = "Messenger_light_menu_btn_close__dn4Fq"
        } else {
            this.props.setCloseOpenChat(true)
            this.classMenuIsOpen = "Messenger_light_menu_btn__YPBRP"
        }
    }

    componentDidMount() {
        this.props.getScroll(this.props.chatActive)
        if (this.props.scroll === 0) {
            this.list.scrollTop = this.list.scrollHeight;
        } else {
            this.list.scrollTop = this.props.scroll
        }
        this.list.addEventListener('scroll', this._handleScroll.bind(this));

        if (!!this.props.chatActive) {
            this.chat = this.props.chats[this.props.chatActive - 1]
        }
    }

    componentWillUnmount() {
        this.list.removeEventListener('scroll', this._handleScroll);
    }

    render() {
        this.chat = this.props.chats[this.props.chatActive - 1]
        if (!!this.chat && this.chat.username.length > 25) {
            this.chat.username = `${this.chat.username.substr(0, 25)}...`
        }
        if (!!this.chat && this.chat.description.length > 30) {
            this.chat.description = `${this.chat.description.substr(0, 30)}...`
        }
        return (<div className={this.s.messenger}>
            <div className={this.s.header}>
                <div onClick={this.onClickBtn.bind(this)} className={this.classMenuIsOpen}>
                    <span></span>
                </div>
                <div className={this.s.info}>
                    <h1 className={this.s.name}>{!!this.chat ? this.chat.username : "..."}</h1>
                    <p className={this.s.description}>
                        {!!this.chat ? this.chat.description : "..."}
                    </p>
                    {(!!this.chat && this.chat.lastActive === true)
                        ? <div className={this.s.active_now}>
                            <div></div>
                            <p>Active</p>
                        </div>
                        : (!!this.chat)
                            ? <p className={this.s.was_last_time}>{this.chat.lastActive}</p>
                            : <p className={this.s.was_last_time}>...</p>
                    }
                </div>
                <img className={this.s.settings} src={setting_light} alt="#" />
            </div>
            <div ref={node => this.list = node} onScroll={this._handleScroll} className={this.s.messages}>
                {this.props.messages.map(m => {
                    if (!m.date) {
                        if (m.isMyMessage) {
                            return <Message isMyMessage={m.isMyMessage} key={m.id} id={m.id} styles={this.s.your_message} revised={m.revised} time={m.time} message={m.message} />
                        } else {
                            return <Message key={m.id} id={m.id} styles={this.s.his_message} revised={m.revised} time={m.time} message={m.message} />
                        }
                    } else {
                        return <Date key={m.id} date={m.date} />
                    }
                })}
            </div>
            <TextInput message={this.props.message} getMessages={this.props.getMessages}
                chatActive={this.props.chatActive} addMessage={this.props.addMessage}
                changeMessage={this.props.changeMessage} />
        </div>)
    }
}

export default Messages;