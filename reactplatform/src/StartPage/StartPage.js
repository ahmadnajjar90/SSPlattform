import React from 'react';
import './StartPage.css';
import '../Components/components.css';

import Header from '../Components/Header';
import WeatherApp from '../WeatherApp/WeatherApp.js';
//import Boll from '../Components/Boll.js';
//import Frostatglas from '../Components/Frostatglas.js';
import Greeting from '../Components/Greeting.js';
//import MaskotBoll from '../Components/maskotboll.js';
import Postit from '../Components/Postit.js';

function StartPage () {
    const weatherstyles = {
        position: 'absolute',
        marginTop: 0
    } 
    return (
        <div>
            <Header />
        <div className="start-page-container">
            <Greeting user="Shaya Solutions" />
            <div className="shadow"></div>
            <WeatherApp style={weatherstyles}/>
            <div className="postit-container">
            <Postit färg="gulPostit" text="UPPDRAG" badge="gulBadge" number="4"/>
            <div className="spacer" />
            <Postit färg="blåPostit" text="FAKTUROR" badge="blåBadge" number="0" />
            <div className="spacer" />
            <Postit färg="grönPostit" text="RAPPORTER" badge="grönBadge" number="9" />
            </div>
        </div>
        </div>

    )

}
export default StartPage