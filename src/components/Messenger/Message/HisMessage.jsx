import React from 'react';
import light from ".././Messenger_light.module.scss"

// light img
import checked_light from '.././../../assets/img/light/checked.png';

// dark img

const HisMessage = ({message}) => {
    let s = light

    return (
        <div className={s.his_message}>
            <div className={s.message}>
                {message}
            </div>
            <p className={s.time}>15:19</p>
            <img className={s.checked} src={checked_light} alt="#" />
        </div>
    );
}

export default HisMessage;