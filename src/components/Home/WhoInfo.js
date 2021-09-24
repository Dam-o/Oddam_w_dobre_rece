import React from 'react';
import Fundation from './Fundation';
import Local from './Local';
import Organization from './Organization';

export default function whoInfo() {
    return (
        <section className="whoInfo" name="whoInfo" >
            <h4>Komu pomagamy?</h4>
            <div className="whoInfo__buttonsContainer">
                <a>Fundacjom</a>
                <a>Organizacjom pozarządowym</a>
                <a>Lokalnym zbiórkom</a>
            </div>
            <Fundation />
            <div className="counter">
                <a>1</a>
                <a>2</a>
                <a>3</a>
            </div>
        </section >
    )
}
