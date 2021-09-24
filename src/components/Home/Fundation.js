import React, { useState, useEffect } from 'react'

export default function Fundation() {
    const [counter, setCounter] = useState(false);

    useEffect(() => {
        const listItem = document.getElementsByClassName("listItem");
        let state = false;
        if (listItem.length >= 3) {
            state = !state;
        }
        setCounter(state);
    }, []);

    return (
        <article className="whoInfo__about" >
            <p className="whoInfo__about--description"> W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <ul >
                <li className="listItem">
                    <div className="whoInfo__about--title">
                        <h5>Fundacja “Dbam o Zdrowie”</h5>
                        <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    </div>
                    <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                </li>
                <li className="listItem">
                    <div className="whoInfo__about--title">
                        <h5>Fundacja “Dla dzieci”</h5>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    </div>
                    <p>ubrania, meble, zabawki</p>
                </li>
                <li className="listItem">
                    <div className="whoInfo__about--title">
                        <h5>Fundacja “Bez domu”</h5>
                        <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    </div>
                    <p>ubrania, jedzenie, ciepłe koce</p>
                </li>
            </ul>
            {counter &&
                <div className="counter">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>}
        </article>
    )
}
