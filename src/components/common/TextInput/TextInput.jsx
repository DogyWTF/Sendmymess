import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useSpring, animated } from 'react-spring'

import light from "../../Messenger/Messenger_light.module.scss"

// img
import me_light from '.././../../assets/img/light/me.png';
import folder_light from '.././../../assets/img/input/folder.png';
import smile_light from '.././../../assets/img/input/smile.png';
import gif_light from '.././../../assets/img/input/gif.png';
import send_light from '.././../../assets/img/input/send.png';

const TextInput = ({ chatActive, addMessage, changeMessage, message }) => {
    let s = light

    const date = new Date()

    let [height, setHeight] = useState(0)
    let [hideButtons, setHideButtons] = useState(false)

    const styles = useSpring({
        display: hideButtons ? "none" : "flex",
    })

    let inputOnBlur = (e) => {
        if (!e.cancelable) {
            setHideButtons(!hideButtons)
        } else {
            setHideButtons(true)
        }
    }

    const validationSchemaLoginForm = Yup.object().shape({
        message: Yup.string()
            .max(3500, "Must be shorter than 3500 characters")
    });

    return (
        <Formik
            initialValues={{ message: message }}
            enableReinitialize={true}
            validationSchema={validationSchemaLoginForm}
            onSubmit={(values, { setSubmitting, setStatus }) => {
                setTimeout(() => {
                    setSubmitting(true);
                    addMessage(chatActive, values.message, date.toUTCString(), setStatus)
                    values.message = ""
                    setSubmitting(false);
                }, 1)
            }}>
            {({ isSubmitting, handleSubmit, status, values }) => (
                <div>
                    <p className={s.err_msg} style={{margin: `0px 0px ${height-38}px 112px`}}>
                        <ErrorMessage name={"message"}  />
                    </p>
                    <Form className={s.text_input}>
                        <img className={s.me} src={me_light} alt="#" />
                        <div className={s.input}>
                            <Field
                                name={"message"}
                                type={"text"}>
                                {({ field, meta: { touched, error } }) => {
                                    return <ReactTextareaAutosize {...field}
                                        value={message}
                                        onChange={e => {
                                            changeMessage(e.target.value)
                                        }}
                                        onBlur={inputOnBlur} onClick={inputOnBlur}
                                        className={touched && error
                                            ? `${s.input_input} ${s.inputError}`
                                            : s.input_input}
                                        style={{
                                            margin: `${-height + 40}px 0px`,
                                            padding: hideButtons ? "12.5px 40px 12.5px 18px" : "12.5px 160px 12.5px 18px",
                                        }} maxLength="3501" maxRows={10}
                                        onHeightChange={(height) => setHeight(height)}
                                        placeholder='Write a comment...' />
                                }}
                            </Field>
                            <div className={s.input_btn}>
                                <animated.div disabled={hideButtons} style={styles} className={s.input_hide} >
                                    <img className={s.input_folder} src={folder_light} alt="#" />
                                    <img className={s.input_smile} src={smile_light} alt="#" />
                                    <img className={s.input_gif} src={gif_light} alt="#" />
                                </animated.div>
                                <button disabled={isSubmitting} type="submit"
                                    className={s.input_send}>
                                    <img src={send_light} alt="#" />
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>

            )}
        </Formik>
    );
}

export default TextInput