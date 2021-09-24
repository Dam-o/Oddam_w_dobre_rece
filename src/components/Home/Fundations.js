import React from 'react'

export default function Fundations() {
    return (
        <section className="whoInfo" name={whoInfo}>
            <h4>Komu pomagamy?</h4>
            <div className="whoInfo__buttonsContainer">
                <a className="whoInfo__buttonContainer--button">Fundacjom</a>
                <a className="whoInfo__buttonContainer--button">Organizacjom pozarządowym</a>
                <a className="whoInfo__buttonContainer--button">Lokalnym zbiórkom</a>
            </div>
            <article className="whoInfo__about">
                <p> W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <ul>
                    <li>
                        <div className="whoInfo__about--title">
                            <h5>Fundacja “Dbam o Zdrowie”</h5>
                            <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        </div>
                        <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </li>
                    l>
                    <li>
                        <div className="whoInfo__about--title">
                            <h5>Fundacja “Dla dzieci”</h5>
                            <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                        </div>
                        <p>ubrania, meble, zabawki</p>
                    </li>
                    l>
                    <li>
                        <div className="whoInfo__about--title">
                            <h5>Fundacja “Bez domu”</h5>
                            <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        </div>
                        <p>ubrania, jedzenie, ciepłe koce</p>
                    </li>
                </ul>
            </article>
        </section>
    )
}
