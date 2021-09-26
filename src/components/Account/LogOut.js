import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LogOut() {
    return (
        <div className="accountControl logout" >
            <h1>Wylogowanie nastąpiło pomyślnie</h1>
            <NavLink to="/" className="accountControl__buttons--btn logout-btn">Strona główna</NavLink>
        </div>
    )
}
