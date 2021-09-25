import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import { useHistory } from 'react-router'
var Scroll = require('react-scroll');
var scroller = Scroll.scroller;


export default function HeaderNav() {
    const history = useHistory();
    const backPage = () => history.push("/");
    const scroll = (element) => {
        setTimeout(() => {
            scroller.scrollTo(element, {
                smooth: true,
                duration: 500
            })
        }, [200])
    }
    const pageCheck = (element) => {
        backPage();
        scroll(element);
    }


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
                    <NavLink to="/"
                        style={{ textDecoration: "none" }}
                        className="menu__bottom--link">
                        Start</NavLink>
                    <Link
                        to="simpleSteps"
                        smooth={true}
                        duration={500}
                        className="menu__bottom--link"
                        onClick={() => pageCheck("simpleSteps")}
                    >
                        O co chodzi?</Link>
                    <Link to="about"
                        smooth={true}
                        duration={500}
                        className="menu__bottom--link"
                        onClick={() => pageCheck("about")}>
                        O nas</Link>
                    <Link to="whoInfo"
                        smooth={true}
                        duration={500}
                        className="menu__bottom--link"
                        onClick={() => pageCheck("whoInfo")}>
                        Fundacja i organizacje</Link>
                    <Link to="contact"
                        smooth={true}
                        duration={500}
                        className="menu__bottom--link"
                        onClick={() => pageCheck("contact")}>
                        Kontakt</Link>
                </ul>
            </nav>
        </header >


    )
}

