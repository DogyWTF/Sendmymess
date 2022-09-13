import React from 'react';
import { useSpring, animated } from 'react-spring';
import light from ".././Messenger_light.module.scss"

// light img

// dark img

const Date = ({ date }) => {
    let s = light

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
                    {date}
                </div>
            </div>
        </animated.div>
    );
}

export default Date;