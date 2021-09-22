import React from 'react'
import { Link } from 'react-router-dom'

export default function Jumbotron() {
    return (
        <div className="jumbotron">
            <div>
                <div className="jumbotron__image" />
            </div>
            <div className="jumbotron__text">
                <h1>Zacznij pomagać!
                    <span />Oddaj niechciane rzeczy w zaufane ręce</h1>
                <div className="jumbotron__cta">
                    <Link to="/" className="jumbotron__cta--btn">ODDAJ RZECZY</Link>
                    <Link to="/" className="jumbotron__cta--btn">ZORGANIZUJ ZBIÓRKĘ</Link>
                </div>
            </div>
        </div >
    )
}
