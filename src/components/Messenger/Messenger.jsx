import React, { useEffect, useState } from 'react';
import { useSpring, Spring, animated } from 'react-spring'
import { NavLink } from "react-router-dom";

import light from "./Messenger_light.module.scss"

import User from './User/User';
import Messages from './Messages';

// img
import magnifying_glass from './../../assets/img/input/magnifying-glass.png';

// light img
import logo_light from './../../assets/img/logo/logo2.png';
import me_light from './../../assets/img/light/me.png';

//

const Messenger = ({ chats, chatActive, messages, message, getMessages, addMessage, 
    getUsers, changeMessage, scroll, getScroll, setScroll, closeOpenChat, 
    setCloseOpenChat, setRendered, rendered, setOnRightClick, msgActive, setMsgActive,
    popupText, setPopupText, deleteMsg }) => {
    let s = light

    // css animation
    const [logo, setLogo] = useState({
        img: logo_light,
        text: "Sendmymess",
        style: { color: "#5F27B8" },
        hover: false
    })
    const [inputSelected, setInputSelected] = useState({
        selected: false
    })

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

    return (
        <main style={{ position: "relative" }} className={s.main}>
            {popupText
                ? <div className={s.popup_msg}><div>{popupText}</div></div>
                : null}

            <Spring
                immediate={logo.hover}
                from={{ marginLeft: '0px' }}
                to={{ marginLeft: '-500px' }}
                reverse={closeOpenChat}>
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
                    changeMessage={changeMessage} chats={chats} scroll={scroll}
                    getScroll={getScroll} setScroll={setScroll} closeOpenChat={closeOpenChat}
                    setCloseOpenChat={setCloseOpenChat} setRendered={setRendered}
                    rendered={rendered} setOnRightClick={setOnRightClick}
                    msgActive={msgActive} setMsgActive={setMsgActive}
                    setPopupText={setPopupText} popupText={popupText}
                    deleteMsg={deleteMsg} />}
        </main>
    );
}

export default Messenger;