import React from 'react';
import HeaderNav from './HeaderNav';
import Jumbotron from './Jumbotron';
import ThreeColumns from './ThreeColumns';
import SimpleSteps from './SimpleSteps';


export default function Home() {
    return (
        <>
            <HeaderNav />
            <main>
                <Jumbotron />
                <ThreeColumns />
                <SimpleSteps />
            </main>

        </>
    )
}
