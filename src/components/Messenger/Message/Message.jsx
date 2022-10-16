import React, { Component, useEffect, useState } from 'react';
import light from ".././Messenger_light.module.scss"

// light img
import checked_light from '.././../../assets/img/light/checked.png';

// dark img

const Message = ({ message, styles, revised, time, isMyMessage, id, setOnRightClick, chatActive }) => {
    let s = light

    const dateMsg = new Date(time);
    let date = `${dateMsg.getHours()}:${dateMsg.getMinutes()}`
    if (dateMsg.getMinutes() < 10) {
        date = `${dateMsg.getHours()}:0${dateMsg.getMinutes()}`
    }

    let handleContextMenu = (e) => {
        setOnRightClick(id, chatActive)
    };
    
    return (
        <div className={styles}>
            <div onContextMenu={handleContextMenu} style={{ backgroundColor: isMyMessage ? "#6C6B6A" : "#fff", color: isMyMessage ? "#fff" : "#000", textAlign: isMyMessage ? "right" : "left" }} className={s.message}>
                {message}
            </div>
            <p className={s.time}>{date}</p>
            {revised && <img className={s.checked} src={checked_light} alt="#" />}
        </div>
    );
}

export default Message;