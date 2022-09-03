import React from 'react';
import light from ".././Messenger_light.module.scss"

// light img
import user_light from '.././../../assets/img/light/user.png';

// dark img

import user_dark from '.././../../assets/img/dark/user.png';

const User = () => {
    let s = light

    return (
        <div className={`${s.user}`}>
            <img className={s.user_img} src={user_light} alt="#" />
            <div className={s.user_data}>
                <div className={s.user_activity}>
                    <h1 className={s.user_name}>Username</h1>
                    <div className={s.active} />
                    <div className={s.missed_msg}>
                        <p>+99</p>
                    </div>
                </div>
                <p className={s.user_lastmsg}>
                    Hello my dear friend. How are you? Maybe you need help?
                </p>
            </div>
        </div>
    );
}

export default User;