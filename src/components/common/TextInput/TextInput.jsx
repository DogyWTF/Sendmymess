import React, { useState } from 'react';
import light from "../../Messenger/Messenger_light.module.scss"

import ReactTextareaAutosize from 'react-textarea-autosize';
import { useSpring, animated } from 'react-spring'

// img
import me_light from '.././../../assets/img/light/me.png';
import folder_light from '.././../../assets/img/input/folder.png';
import smile_light from '.././../../assets/img/input/smile.png';
import gif_light from '.././../../assets/img/input/gif.png';
import send_light from '.././../../assets/img/input/send.png';

const TextInput = () => {
    let s = light

    let [height, setHeight] = useState(0)
    let [hideButtons, setHideButtons] = useState(false)

    const styles = useSpring({
        opacity: hideButtons ? 0 : 1,
    })
    
    let inputOnBlur = (e) => {
        if (!e.cancelable) {
            setHideButtons(!hideButtons)
        } else {
            setHideButtons(true)
        }
    }

    return (
        <div className={s.text_input}>
            <img className={s.me} src={me_light} alt="#" />
            <div className={s.input}>
                <ReactTextareaAutosize onBlur={inputOnBlur} onClick={inputOnBlur}
                    style={{ margin: `${-height + 40}px 0px` }}
                    onHeightChange={(height) => setHeight(height)}
                    placeholder='Write a comment...' className={s.input_input} />
                <div className={s.input_btn}>
                    <animated.div disabled={hideButtons} style={styles} className={s.input_hide} >
                            <img className={s.input_folder} src={folder_light} alt="#" />
                            <img className={s.input_smile} src={smile_light} alt="#" />
                            <img className={s.input_gif} src={gif_light} alt="#" />
                    </animated.div>
                    <div className={s.input_send}>
                        <img src={send_light} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextInput;