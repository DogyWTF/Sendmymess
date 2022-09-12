import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';

import light from "./Messenger_light.module.scss"
import Message from './Message/Message'
import Date from './Message/Date';
import TextInput from '../common/TextInput/TextInput';

// img

// light img
import setting_light from './../../assets/img/light/setting.png';


//

class ScrollingApp extends React.Component {

    _handleScroll(ev) {
        console.log(ev.target.scrollTop)
    }
    componentDidMount() {
        this.list.addEventListener('scroll', this._handleScroll);
    }
    componentWillUnmount() {
        this.list.removeEventListener('scroll', this._handleScroll);
    }
    render() {
        return( <div ref={node => this.list = node} onScroll={this._handleScroll} 
        style={{height: "50vh", width: "100vh", overflow: "auto"}}>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1><h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1><h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1><h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1><h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1><h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1><h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
            <h1>fdsssssssss</h1>
        </div>)
    }
}

const Messages = ({ chats, chatActive, messages, message,
    getMessages, addMessage, changeMessage }) => {
    let s = light

    const messengerRef = useRef(null)

    let [chat, setChat] = useState("")

    useEffect(() => {
        setChat(chats[chatActive - 1])
    }, [chatActive])

    // css animation
    const [menuIsOpen, setMenuIsOpen] = useState(true)
    const [classMenuIsOpen, setClassMenuIsOpen] = useState("Messenger_light_menu_btn__YPBRP")

    let onClickBtn = () => {
        if (menuIsOpen === true) {
            setMenuIsOpen(false)
            setClassMenuIsOpen("Messenger_light_menu_btn_close__dn4Fq")
        } else {
            setMenuIsOpen(true)
            setClassMenuIsOpen("Messenger_light_menu_btn__YPBRP")
        }
    }
    // css animation

    return (
        <div ref={messengerRef} className={s.messenger}>
            <div className={s.header}>
                <div onClick={onClickBtn} className={classMenuIsOpen}>
                    <span></span>
                </div>
                <div className={s.info}>
                    <h1 className={s.name}>{!!chat ? chat.username : "..."}</h1>
                    <p className={s.description}>
                        {!!chat ? chat.description : "..."}
                    </p>
                    {(!!chat && chat.lastActive === true)
                        ? <div className={s.active_now}>
                            <div></div>
                            <p>Active</p>
                        </div>
                        : (!!chat)
                            ? <p className={s.was_last_time}>{chat.lastActive}</p>
                            : <p className={s.was_last_time}>...</p>
                    }
                </div>
                <img className={s.settings} src={setting_light} alt="#" />
            </div>
            <div className={s.messages}>
                {messages.map(m => {
                    if (!m.date) {
                        if (m.isMyMessage) {
                            return <Message isMyMessage={m.isMyMessage} key={m.id} id={m.id} styles={s.your_message} revised={m.revised} time={m.time} message={m.message} />
                        } else {
                            return <Message key={m.id} id={m.id} styles={s.his_message} revised={m.revised} time={m.time} message={m.message} />
                        }
                    } else {
                        return <Date key={m.id} date={m.date} />
                    }
                })}
            </div>
            <TextInput message={message}
                getMessages={getMessages} chatActive={chatActive}
                addMessage={addMessage} changeMessage={changeMessage} />
        </div>
    );
}

export default ScrollingApp;