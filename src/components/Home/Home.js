import React from 'react';
import Jumbotron from './Jumbotron';
import ThreeColumns from './ThreeColumns';
import SimpleSteps from './SimpleSteps';
import About from './About';
import WhoInfo from './WhoInfo';
import Form from './Form';


export default function Home() {
    return (

        <main name="mainPage">
            <Jumbotron />
            <ThreeColumns />
            <SimpleSteps />
            <About />
            <WhoInfo />
            <Form />
        </main>

    )
}
