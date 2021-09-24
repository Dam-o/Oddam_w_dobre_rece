import React from 'react'
import Footer from './Footer'

export default function Form() {
    return (
        <div class="container">
            <section className="contact" name="contact">
                <form className="contact__form">
                    <h4>Skontaktuj się z nami</h4>
                    <fieldset className="contact__form--name">
                        <div>
                            <label for="name">Wpisz swoje imię</label>
                            <input name="name" type="text" placeholder="Krzysztof"></input>
                        </div>
                        <div>
                            <label for="email">Wpisz swój email</label>
                            <input name="email" type="email" placeholder="abc@xyz.pl"></input>
                        </div>
                    </fieldset>
                    <fieldset className="contact__form--text">
                        <label for="message">Wpisz swoją wiadomość</label>
                        <textarea name="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                    </fieldset>
                    <button type="submit" className="contact__form--button">Wyślij</button>
                </form>
            </section>
            <Footer />
        </div>
    )
}
