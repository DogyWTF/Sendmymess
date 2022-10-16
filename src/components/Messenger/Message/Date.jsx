import React from 'react';
import { useSpring, animated } from 'react-spring';
import light from ".././Messenger_light.module.scss"

// light img

// dark img

const LastDate = ({ date }) => {
    let s = light
    
    const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dateMsg = new Date(date);

    const style = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
    })

    return (
        <animated.div>
            <div className={s.date}>
                <div className={s.date_text}>
                    {`${monthsList[dateMsg.getMonth()]} ${dateMsg.getDate()}`}
                </div>
            </div>
        </animated.div>
    );
}

export default LastDate;