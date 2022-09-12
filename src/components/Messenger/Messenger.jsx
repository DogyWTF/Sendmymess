import React, { useEffect, useState } from 'react';
import { useSpring, Spring, animated } from 'react-spring'
import { NavLink } from "react-router-dom";

import light from "./Messenger_light.module.scss"

import User from './User/User';

// img
import magnifying_glass from './../../assets/img/input/magnifying-glass.png';

// light img
import logo_light from './../../assets/img/logo/logo2.png';
import me_light from './../../assets/img/light/me.png';
import Messages from './Messages';

//

const Messenger = ({ chats, chatActive, messages, message,
    getMessages, addMessage, getUsers, changeMessage }) => {
    let s = light

    let [chat, setChat] = useState("")

    useEffect(() => {
        setChat(chats[chatActive - 1])
    }, [chatActive])

    // css animation
    const [menuIsOpen, setMenuIsOpen] = useState(true)
    const [classMenuIsOpen, setClassMenuIsOpen] = useState("Messenger_light_menu_btn__YPBRP")
    const [logo, setLogo] = useState({
        img: logo_light,
        text: "Sendmymess",
        style: { color: "#5F27B8" },
        hover: false
    })
    const [inputSelected, setInputSelected] = useState({
        selected: false
    })

    let onClickBtn = () => {
        if (menuIsOpen === true) {
            setMenuIsOpen(false)
            setClassMenuIsOpen("Messenger_light_menu_btn_close__dn4Fq")
        } else {
            setMenuIsOpen(true)
            setClassMenuIsOpen("Messenger_light_menu_btn__YPBRP")
        }
    }

    const inputOnBlurStyles = useSpring({
        form: {
            opacity: inputSelected.selected ? 1 : 0,
        },
        to: {
            opacity: inputSelected.selected ? 0 : 1,
            width: inputSelected.selected ? "0px" : "90px",
        }
    })

    let inputOnBlur = (e) => {
        if (e.cancelable) {
            setInputSelected({
                selected: !inputSelected.selected
            })
        } else {
            setInputSelected(true)
        }
    }

    let onLogoHoverEnter = () => {
        setTimeout(() => {
            setLogo({
                img: me_light,
                text: "My username",
                style: { color: "#000" },
                hover: true
            })
        }, 150)
    }
    let onLogoHoverLeave = () => {
        setTimeout(() => {
            setLogo({
                img: logo_light,
                text: "Sendmymess",
                style: { color: "#5F27B8" },
                hover: false
            })
        }, 150)
    }
    // css animation

    if(!!chat && chat.username.length > 25) {
        chat.username = `${chat.username.substr(0, 25)}...`
    }

    if(!!chat && chat.description.length > 40) {
        chat.description = `${chat.description.substr(0, 40)}...`
    }

    return (
        <main className={s.main}>
            <Spring
                immediate={logo.hover}
                from={{ marginLeft: '0px' }}
                to={{ marginLeft: '-500px' }}
                reverse={menuIsOpen}>
                {styles => (<animated.div style={styles}>
                    <div className={s.menu}>
                        <div className={s.header}>
                            <div onMouseLeave={onLogoHoverLeave} onMouseEnter={onLogoHoverEnter} className={s.logo}>
                                <img className={s.logo_img} src={logo.img} alt="#" />
                                <animated.div style={inputOnBlurStyles}>
                                    <h1 style={logo.style} className={s.logo_text}>{logo.text}</h1>
                                </animated.div>
                            </div>
                            <div className={s.input}>
                                <input onBlur={inputOnBlur} onClick={inputOnBlur} className={s.input_input} placeholder="Search" type="text" />
                                <div className={s.input_btn}>
                                    <img className={s.input_search} src={magnifying_glass} alt="#" />
                                </div>
                            </div>
                        </div>
                        <div className={s.chats}>
                            {chats.map(u => {
                                if (u.id === chatActive) {
                                    return (<NavLink key={u.id} to={'/' + u.id}>
                                        <User id={u.id} key={u.id} username={u.username}
                                            lastActive={u.lastActive} scroll={u.scroll}
                                            missedMsg={u.missedMsg} lastMsg={u.lastMsg}
                                            getMessages={getMessages} avatar={u.avatar}
                                            style={s.userActive} chatActive={chatActive} />
                                    </NavLink>)
                                } else {
                                    return (<NavLink key={u.id} to={'/' + u.id}>
                                        <User id={u.id} key={u.id} username={u.username}
                                            lastActive={u.lastActive} scroll={u.scroll}
                                            missedMsg={u.missedMsg} lastMsg={u.lastMsg}
                                            getMessages={getMessages} avatar={u.avatar}
                                            style={s.user} chatActive={chatActive} />
                                    </NavLink>)
                                }
                            })}
                        </div>
                    </div>
                </animated.div>)}
            </Spring>
            {chatActive === null
                ? <div className={`${s.messenger} ${s.not_active_chat}`}>
                    <div className={s.preloader}>
                        <p>S</p>
                        <p>e</p>
                        <p>n</p>
                        <p>d</p>
                        <p>m</p>
                        <p>y</p>
                        <p>m</p>
                        <p>e</p>
                        <p>s</p>
                        <p>s</p>
                    </div>
                    <p className={s.not_active_chat_text}>Select a chat to start chatting</p>
                </div>
                : <Messages chatActive={chatActive} messages={messages} message={message} 
                getMessages={getMessages} addMessage={addMessage} getUsers={getUsers} 
                changeMessage={changeMessage} chats={chats} />}
        </main>
    );
}

export default Messenger;