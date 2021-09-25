import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
    return (
        <div className="login">
            <h1>Zaloguj się</h1>
            <form className="login__form">

                <fieldset className="login__form--email">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"></input>
                </fieldset>
                <fieldset className="login__form---password">
                    <label htmlFor="password">Hasło</label>
                    <input type="password" name="password"></input>
                </fieldset>
            </form>
            <div className="login__buttons">
                <NavLink to="/rejestracja" className="login__buttons--btn">Założ konto</NavLink>
                <button className="login__buttons--btn">Zaloguj się</button>
            </div>
        </div>

    )
}
