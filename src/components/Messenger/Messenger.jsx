import React, { useState } from 'react';
import { Keyframes, useSpring, Spring, animated } from 'react-spring'
import light from "./Messenger_light.module.scss"

import User from './User/User';
import YourMessage from './Message/YourMessage';
import HisMessage from './Message/HisMessage'
import Date from './Message/Date';
import TextInput from '../common/TextInput/TextInput';

// img
import magnifying_glass from './../../assets/img/input/magnifying-glass.png';

// light img
import logo_light from './../../assets/img/logo/logo2.png';
import setting_light from './../../assets/img/light/setting.png';
import me_light from './../../assets/img/light/me.png';

//

const Messenger = () => {
    let s = light

    // css animation
    const [menuIsOpen, setMenuIsOpen] = useState(true)
    const [classMenuIsOpen, setClassMenuIsOpen] = useState("Messenger_light_menu_btn__YPBRP")
    const [logo, setLogo] = useState({
        img: logo_light,
        text: "Sendmymess",
        style: { color: "#5F27B8" },
        hover: false
    })
    const [inputSelected, setInputSelected] = useState({
        selected: false
    })

    let onClickBtn = () => {
        if (menuIsOpen === true) {
            setMenuIsOpen(false)
            setClassMenuIsOpen("Messenger_light_menu_btn_close__dn4Fq")
        } else {
            setMenuIsOpen(true)
            setClassMenuIsOpen("Messenger_light_menu_btn__YPBRP")
        }
    }

    const inputOnBlurStyles = useSpring({
        form: {
            opacity: inputSelected.selected ? 1 : 0,
        }, 
        to: {
            opacity: inputSelected.selected ? 0 : 1,
            width: inputSelected.selected ? "0px" : "90px",
        }
    })

    let inputOnBlur = (e) => {
        if (e.cancelable) {
            setInputSelected({
                selected: !inputSelected.selected
            })
        } else {
            setInputSelected(true)
        }
    }

    let onLogoHoverEnter = () => {
        setTimeout(() => {
            setLogo({
                img: me_light,
                text: "My username",
                style: { color: "#000" },
                hover: true
            })
        }, 150)
    }
    let onLogoHoverLeave = () => {
        setTimeout(() => {
            setLogo({
                img: logo_light,
                text: "Sendmymess",
                style: { color: "#5F27B8" },
                hover: false
            })
        }, 150)
    }
    // css animation

    return (
        <main className={s.main}>
            <Spring
                immediate={logo.hover}
                from={{ marginLeft: '0px' }}
                to={{ marginLeft: '-500px' }}
                reverse={menuIsOpen}>
                {styles => (<animated.div style={styles}>
                    <div className={s.menu}>
                        <div className={s.header}>
                            <div onMouseLeave={onLogoHoverLeave} onMouseEnter={onLogoHoverEnter} className={s.logo}>
                                <img className={s.logo_img} src={logo.img} alt="#" />
                                <animated.div style={inputOnBlurStyles}>
                                    <h1 style={logo.style} className={s.logo_text}>{logo.text}</h1>
                                </animated.div>
                            </div>
                            <div className={s.input}>
                                <input onBlur={inputOnBlur} onClick={inputOnBlur} className={s.input_input} placeholder="Search" type="text" />
                                <div className={s.input_btn}>
                                    <img className={s.input_search} src={magnifying_glass} alt="#" />
                                </div>
                            </div>
                        </div>
                        <div className={s.chats}>
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                        </div>
                    </div>
                </animated.div>)}
            </Spring>

            <div className={s.messenger}>
                <div className={s.header}>
                    <div onClick={onClickBtn} className={classMenuIsOpen}>
                        <span></span>
                    </div>
                    <div className={s.info}>
                        <h1 className={s.name}>Username</h1>
                        <p className={s.description}>
                            My name is Username
                        </p>
                        <p className={s.was_last_time}>
                            Was active on April 28 at 16:25
                        </p>
                    </div>
                    <img className={s.settings} src={setting_light} alt="#" />
                </div>
                <div className={s.messages}>
                    <YourMessage message={"Hi my friend."} />
                    <YourMessage message={"Do you like the new messenger?"} />
                    <YourMessage message={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure commodi voluptas vel cum esse qui labore. Dolorum voluptatem quod nostrum, quaerat beatae iure esse molestias quasi deleniti, vero sapiente obcaecati."} />
                    <Date date={"April 28"} />
                    <HisMessage message={"Hello my dear friend. How are you? Maybe you need help?"} />
                </div>
                <TextInput />
            </div>
        </main>
    );
}

export default Messenger;