import React from 'react';
import light from "./Messenger_light.module.scss"

// img
import magnifying_glass from './../../assets/img/input/magnifying-glass.png';

// light img
import logo_light from './../../assets/img/logo/logo2.png';
import user_light from './../../assets/img/light/user.png';

//

const Messenger = () => {
    let s = light

    return (
        <main>
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
                    <div className={s.user}>
                        <img className={s.user_img} src={user_light} alt="#" />
                        <div className={s.user_data}>
                            <div className={s.user_activity}>
                                <h1 className={s.user_name}>
                                    Username
                                </h1>
                                <div className={s.active}/>
                            </div>
                            <p className={s.user_lastmsg}>
                                Hello my dear friend. How are you? Maybe you need help?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.messenger}></div>
        </main>
    );
}

export default Messenger;