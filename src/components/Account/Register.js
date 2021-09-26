import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
    const [registerData, setRegisterData] = useState({
        email: "",
        password: "",
        password2: ""
    });

    const dataHandler = (e) => {
        const { name, value } = e.target;
        setRegisterData(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    const [passwordError, setPasswordError] = useState({});
    const [password2Error, setPassword2Error] = useState({});
    const [emailError, setEmailError] = useState({});


    const validate = () => {
        const emailError = {};
        const passwordError = {};
        const password2Error = {};
        let isValid = true;
        const reg = /^\S+@\S+\.\S+$/;

        if (!reg.test(registerData.email.trim())) {
            emailError.wrongEmail = "Podany email jest nieprawidłowy!";
            isValid = false;
        }
        if (registerData.password.length < 6) {
            passwordError.wrongPassword = "Podane hasło jest za krótkie!"
            isValid = false;
        }
        if (registerData.password2 !== registerData.password || registerData.password2 === "") {
            password2Error.wrongPassword = "Podane hasła nie są takie same!"
            isValid = false;
        }
        setEmailError(emailError);
        setPasswordError(passwordError);
        setPassword2Error(password2Error);
        return isValid;
    };
    const onSubmit = (e) => {
        e.preventDefault();
        validate();
    };

    return (
        <div className="accountControl">
            <h1>Załóż konto</h1>
            <form className="accountControl__form">
                <fieldset className="accountControl__form--email">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={dataHandler}></input>
                    {Object.keys(emailError).map((key) => {
                        return (
                            <span
                                key="emailErorr"
                                className="error">{emailError[key]}</span>
                        )
                    })}
                </fieldset>
                <fieldset className="accountControl__form--password">
                    <label htmlFor="password">Hasło</label>
                    <input type="password" name="password" onChange={dataHandler}></input>
                    {Object.keys(passwordError).map((key) => {
                        return (
                            <span
                                key="passwordErorr"
                                className="error">{passwordError[key]}</span>
                        )
                    })}
                </fieldset>
                <fieldset className="accountControl__form--password">
                    <label htmlFor="password2">Powtórz hasło</label>
                    <input type="password" name="password2" onChange={dataHandler}></input>
                    {Object.keys(password2Error).map((key) => {
                        return (
                            <span
                                key="password2Erorr"
                                className="error">{password2Error[key]}</span>
                        )
                    })}
                </fieldset>
            </form>
            <div className="accountControl__buttons">
                <NavLink to="/logowanie" className="accountControl__buttons--btn">Zaloguj się</NavLink>
                <button className="accountControl__buttons--btn"
                    onClick={e => onSubmit(e)}>Załóż konto</button>
            </div>
        </div>
    )
}
