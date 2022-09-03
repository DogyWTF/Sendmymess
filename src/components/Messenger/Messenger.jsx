import React from 'react';
import light from "./Messenger_light.module.scss"

import User from './User/User';

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

    return (
        <main className={s.main}>
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
                <div className={s.chat}>
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

            <div className={s.messenger}>
                <div className={s.header}>
                    <img className={s.menu_btn} src={arrow_light} alt="#" />
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
                
            </div>
        </main>
    );
}

export default Messenger;