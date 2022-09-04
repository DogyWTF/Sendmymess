import React from 'react';
import light from ".././Messenger_light.module.scss"

// light img
import checked_light from '.././../../assets/img/light/checked.png';

// dark img

const YourMessage = ({message}) => {
    let s = light

    return (
        <div className={s.your_message}>
            <img className={s.checked} src={checked_light} alt="#" />
            <p className={s.time}>11:20</p>
            <div style={{ background: "#6C6B6A", color: "#fff" }} className={s.message}>
                {message}
            </div>
        </div>
    );
}

export default YourMessage;