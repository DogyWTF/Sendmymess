import React, { useState } from 'react';
import light from ".././Messenger_light.module.scss"

// light img
import user_light from '.././../../assets/img/light/user.png';

const User = ({ username, avatar, missedMsg, lastMsg, lastActive, scroll,
    id, getMessages, style }) => {
    let s = light

    if (avatar === null) {
        avatar = user_light
    }

    let clickUser = (id) => {
        getMessages(id)
    }

    return (
        <div onClick={() => clickUser(id)} className={style}>
            <img className={s.user_img} src={avatar} alt="#" />
            <div className={s.user_data}>
                <div className={s.user_activity}>
                    <h1 className={s.user_name}>{username}</h1>
                    {lastActive === true && <div className={s.active} />}
                    {missedMsg &&
                        <div className={s.missed_msg}>
                            <p>{missedMsg}</p>
                        </div>}
                </div>
                <p className={s.user_lastmsg}>
                    {lastMsg || "You have no last message"}
                </p>
            </div>
        </div>
    );
}

export default User;