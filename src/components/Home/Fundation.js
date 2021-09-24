import React from 'react'

export default function Fundation() {
    return (
        <article className="whoInfo__about" >
            <p className="whoInfo__about--description"> W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <ul>
                <li>
                    <div className="whoInfo__about--title">
                        <h5>Fundacja “Dbam o Zdrowie”</h5>
                        <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    </div>
                    <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                </li>
                <li>
                    <div className="whoInfo__about--title">
                        <h5>Fundacja “Dla dzieci”</h5>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    </div>
                    <p>ubrania, meble, zabawki</p>
                </li>
                <li>
                    <div className="whoInfo__about--title">
                        <h5>Fundacja “Bez domu”</h5>
                        <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    </div>
                    <p>ubrania, jedzenie, ciepłe koce</p>
                </li>
            </ul>
        </article>
    )
}
