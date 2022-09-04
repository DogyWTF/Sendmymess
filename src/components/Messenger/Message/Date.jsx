import React from 'react';
import light from ".././Messenger_light.module.scss"

// light img

// dark img

const Date = ({date}) => {
    let s = light

    return (
        <div className={s.date}>
            <div className={s.date_text}>
                {date}
            </div>
        </div>
    );
}

export default Date;