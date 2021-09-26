import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const dataHandler = (e) => {
        const { name, value } = e.target;
        setLoginData(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    const [passwordError, setPasswordError] = useState({});
    const [emailError, setEmailError] = useState({});

    const validate = () => {
        const emailError = {};
        const passwordError = {};
        let isValid = true;
        const reg = /^\S+@\S+\.\S+$/;

        if (!reg.test(loginData.email.trim())) {
            emailError.wrongEmail = "Podany email jest nieprawidłowy!";
            isValid = false;
        }

        if (loginData.password.length < 6) {
            passwordError.wrongText = "Podane hasło jest za krótkie!"
            isValid = false;
        }

        setEmailError(emailError);
        setPasswordError(passwordError);
        return isValid;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        validate();
    };

    return (
        <div className="accountControl">
            <h1>Zaloguj się</h1>
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
                <fieldset className="accountControl__form---password">
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
            </form>
            <div className="accountControl__buttons">
                <NavLink to="/rejestracja" className="accountControl__buttons--btn">Założ konto</NavLink>
                <button className="accountControl__buttons--btn"
                    onClick={e => onSubmit(e)}>Zaloguj się</button>
            </div>
        </div>

    )
}
