import React, { useState, useRef } from 'react';
import { Spring, animated } from 'react-spring'
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
import arrow_light from './../../assets/img/light/arrow.png';

import burger_menu_light from './../../assets/img/light/burger_menu.png';

//

const Messenger = () => {
    let s = light

    const [menuIsOpen, setMenuIsOpen] = useState([true, arrow_light, "Messenger_light_menu_btn__YPBRP"])

    let onClickBtn = () => {
        if (menuIsOpen[0] === true) {
            setMenuIsOpen([false, burger_menu_light, "Messenger_light_menu_btn_close__dn4Fq"])
        } else {
            setMenuIsOpen([true, arrow_light, "Messenger_light_menu_btn__YPBRP"])
        }
    }

    return (
        <main className={s.main}>
            <Spring
                reset={true}
                from={{ marginLeft: '0px' }}
                to={{ marginLeft: '-500px' }}
                reverse={menuIsOpen[0]}>
                {styles => (<animated.div style={styles}>
                    <div className={s.menu}>
                        <div className={s.header}>
                            <div className={s.logo}>
                                <img className={s.logo_img} src={logo_light} alt="#" />
                                <h1 className={s.logo_text}>Sendmymess</h1>
                            </div>
                            <div className={s.input}>
                                <input className={s.input_input} placeholder="Search" type="text" />
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
                    <img onClick={onClickBtn} className={menuIsOpen[2]} src={menuIsOpen[1]} alt="#" />
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