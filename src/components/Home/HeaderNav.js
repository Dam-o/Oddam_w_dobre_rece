import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'




export default function HeaderNav() {
    return (
        <header>
            <nav className="menu__top">
                <ul className="menu__top--account">
                    <NavLink to="/logowanie" className="menu__top--link" >Zaloguj</NavLink>
                    <NavLink to="/rejestracja" className="menu__top--link">Załóż konto</NavLink>
                </ul>
            </nav>
            <nav className="menu__bottom">
                <ul className="menu__bottom--nav">
                    <Link to="/"
                        smooth={true}
                        duration={500}
                        className="menu__bottom--link">
                        Start</Link>
                    <Link to="simpleSteps"
                        smooth={true}
                        duration={500}
                        className="menu__bottom--link">
                        O co chodzi?</Link>
                    <Link to="/"
                        smooth={true}
                        duration={500}
                        className="menu__bottom--link">
                        O nas</Link>
                    <Link to="/"
                        smooth={true}
                        duration={500}
                        className="menu__bottom--link">
                        Fundacja i organizacje</Link>
                    <Link to="/"
                        smooth={true}
                        duration={500}
                        className="menu__bottom--link">
                        Kontakt</Link>
                </ul>
            </nav>
        </header>


    )
}
