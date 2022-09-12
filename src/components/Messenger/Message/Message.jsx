import React, { Component, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring'
import light from ".././Messenger_light.module.scss"

// light img
import checked_light from '.././../../assets/img/light/checked.png';

// dark img

const Message = ({ message, styles, revised, time, isMyMessage, id }) => {
    let s = light

    const style = useSpring({
        from: {
            margin: "0px -200vh"
        },
        to: {
            margin: "0px 0px"
        },
    })

    return (
        <animated.div style={style}>
            <div className={styles}>
                <div style={{ backgroundColor: isMyMessage ? "#6C6B6A" : "#fff", color: isMyMessage ? "#fff" : "#000", textAlign: isMyMessage ? "right" : "left" }} className={s.message}>
                    {message}
                </div>
                <p className={s.time}>{time}</p>
                {revised && <img className={s.checked} src={checked_light} alt="#" />}
            </div>
        </animated.div>
    );
}

export default Message;