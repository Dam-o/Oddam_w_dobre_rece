import React from 'react';
import HeaderNav from './HeaderNav';
import Jumbotron from './Jumbotron';
import ThreeColumns from './ThreeColumns';


export default function Home() {
    return (
        <>
            <HeaderNav />
            <main>
                <Jumbotron />
                <ThreeColumns />
            </main>

        </>
    )
}
