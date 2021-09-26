import React from 'react'
import { Link } from "react-router-dom";

export default function SimpleSteps() {
    return (
        <section className="simpleSteps" name="simpleSteps">
            <h4>Wystarczą 4 proste kroki</h4>
            <div className="simpleSteps__container">
                <article className="simpleSteps__container--article">
                    <span className="shirtIcon" />
                    <h5>Wybierz rzeczy</h5>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </article>
                <article className="simpleSteps__container--article">
                    <span className="bagIcon" />
                    <h5>Spakuj je</h5>
                    <p>skorzystaj z worków na śmieci</p>
                </article>
                <article className="simpleSteps__container--article">
                    <span className="magnificerIcon" />
                    <h5>Zdecyduj komu chcesz pomóc</h5>
                    <p>wybierz zaufane miejsce</p>
                </article>
                <article className="simpleSteps__container--article">
                    <span className="arrowsIcon" />
                    <h5>Zamów kuriera</h5>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </article>
            </div >
            <Link to="/logowanie" className="simpleSteps--cta">ODDAJ <span className="break" /> RZECZY</Link>
        </section >
    )
}
