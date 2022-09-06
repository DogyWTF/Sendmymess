import React, { useState } from 'react';
import light from ".././Messenger_light.module.scss"

// light img
import checked_light from '.././../../assets/img/light/checked.png';

// dark img

const Message = ({message, styles, revised, time, isMyMessage}) => {
    let s = light
    
    return (
        <div className={styles}>
            <div style={{backgroundColor: isMyMessage ? "#6C6B6A": "#fff", color:  isMyMessage ? "#fff": "#000"}} className={s.message}>
                {message}
            </div>
            <p className={s.time}>{time}</p>
            {revised && <img className={s.checked} src={checked_light} alt="#" />}
        </div>
    );
}

export default Message;