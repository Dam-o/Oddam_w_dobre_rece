import React, { useState } from 'react';
import Fundation from './Fundation';
import Local from './Local';
import Organization from './Organization';

export default function WhoInfo() {
    const [visible, setVisible] = useState("fundation")


    const showPage = (e) => {
        const newValue = e.target.value;
        setVisible(newValue);
    }


    return (
        <section className="whoInfo" name="whoInfo" >
            <h4>Komu pomagamy?</h4>
            <div className="whoInfo__buttonsContainer">
                <button value="fundation" onClick={showPage}>Fundacjom</button>
                <button value="organization" onClick={showPage}>Organizacjom pozarządowym</button>
                <button value="local" onClick={showPage}>Lokalnym zbiórkom</button>
            </div >
            {visible === "fundation" && <Fundation />}
            {visible === "organization" && <Organization />}
            {visible === "local" && <Local />}
        </section >
    )
}
