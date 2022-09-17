import React, { useState } from 'react';

import light from "./Messenger_light.module.scss"
import Message from './Message/Message'
import Date from './Message/Date';
import TextInput from '../common/TextInput/TextInput';

// img

// light img
import setting_light from './../../assets/img/light/setting.png';
import { useEffect } from 'react';

//

const Messages = (props) => {
    let s = light

    let list
    let [chat, setChat] = useState()
    let [classMenuIsOpen, setClassMenuIsOpen] = useState("Messenger_light_menu_btn__YPBRP")

    let _handleScroll = (ev) => {
        props.setScroll(ev.target.scrollTop)
    }

    let onClickBtn = () => {
        if (props.closeOpenChat === true) {
            props.setCloseOpenChat(false)
            setClassMenuIsOpen("Messenger_light_menu_btn_close__dn4Fq")
        } else {
            props.setCloseOpenChat(true)
            setClassMenuIsOpen("Messenger_light_menu_btn__YPBRP")
        }
    }

    useEffect(() => {
        list.addEventListener('scroll', _handleScroll);
    }, []);

    useEffect(() => {
        props.getScroll()
        if (props.scroll === 0) {
            props.setScroll(list.scrollHeight)
        }
        setChat(props.chats[props.chatActive - 1])
        list.scrollTop = props.scroll
    }, [props]);

    if (!!chat && chat.username.length > 25) {
        chat.username = `${chat.username.substr(0, 25)}...`
    }
    if (!!chat && chat.description.length > 30) {
        chat.description = `${chat.description.substr(0, 30)}...`
    }

    return (<div className={s.messenger}>
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
        <div ref={node => list = node} onScroll={_handleScroll} className={s.messages}>
            {props.messages.map(m => {
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
        <TextInput message={props.message} getMessages={props.getMessages}
            chatActive={props.chatActive} addMessage={props.addMessage}
            changeMessage={props.changeMessage} />
    </div>)
}


export default Messages;