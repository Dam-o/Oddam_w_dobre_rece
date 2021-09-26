import React, { useState } from 'react'
import Footer from './Footer'
import "../../API/post";
import "../../API/post";
import { sendMessage } from '../../API/post';


export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        msg: ""
    });

    const dataHandler = (e) => {
        const { name, value } = e.target;
        setFormData(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    const [nameError, setNameError] = useState({});
    const [emailError, setEmailError] = useState({});
    const [textError, setTextError] = useState({});
    const [success, setSuccess] = useState(false);

    const validate = () => {
        const nameError = {};
        const emailError = {};
        const textError = {};
        let isValid = true;
        const reg = /^\S+@\S+\.\S+$/;

        if (formData.name.length === 0) {
            nameError.shortName = "Podane imię jest nieprawidłowe!"
            isValid = false;
        }

        if (formData.name.indexOf(' ') !== -1) {
            nameError.wrongName = "Podane imię jest nieprawidłowe!"
            isValid = false;
        }

        if (!reg.test(formData.email.trim())) {
            emailError.wrongEmail = "Podany email jest nieprawidłowy!";
            isValid = false;
        }

        if (formData.msg.length < 120) {
            textError.wrongText = "Wiadomość musi mieć conajmniej 120 znaków!"
            isValid = false;
        }

        setNameError(nameError);
        setEmailError(emailError);
        setTextError(textError);
        return isValid;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        const message = {
            name: formData.name,
            email: formData.email,
            msg: formData.msg
        };
        if (isValid) {
            sendMessage(message);
            setSuccess(!success);
        }
    };

    return (
        <div className="background">
            <section className="contact" name="contact">
                <form className="contact__form" >
                    <h4>Skontaktuj się z nami</h4>
                    <span className="success">
                        {success &&
                            <p>  Wiadomość została wysłana!<span className="break" />
                                Wkrótce się skontatkujemy!</p>}
                    </span>
                    <fieldset className="contact__form--name">
                        <div>
                            <label htmlFor="name">Wpisz swoje imię</label>
                            <input name="name" type="text" placeholder="Krzysztof" onChange={dataHandler}  ></input>
                            <p className="error">
                                {Object.keys(nameError).map((key) => {
                                    return (
                                        <span
                                            key="nameErorr"
                                        >{nameError[key]}</span>
                                    )
                                })}</p>
                        </div>
                        <div>
                            <label htmlFor="email">Wpisz swój email</label>
                            <input name="email" type="email" placeholder="abc@xyz.pl" onChange={dataHandler}></input>
                            <p className="error">
                                {Object.keys(emailError).map((key) => {
                                    return (
                                        <span
                                            key="emailError"
                                        > {emailError[key]}</span>
                                    )
                                })}
                            </p>
                        </div>
                    </fieldset>
                    <fieldset className="contact__form--text">
                        <label htmlFor="text">Wpisz swoją wiadomość</label>
                        <textarea onChange={dataHandler} name="msg"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                        <p className="error">     {
                            Object.keys(textError).map((key) => {
                                return (
                                    <span
                                        key="textError"
                                    >{textError[key]}</span>
                                )
                            })}</p>

                    </fieldset>
                    <button className="contact__form--button" onClick={onSubmit}>Wyślij</button>
                </form>
            </section>
            <Footer />
        </div >
    )
}
