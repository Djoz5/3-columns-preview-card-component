import React from "react";
import './App.css';
import Card from "./Card";
import SedanImg from './assets/images/icon-sedans.svg';
import SuvsImg from './assets/images/icon-suvs.svg';
import LuxuryImg from './assets/images/icon-luxury.svg';

const App = () => {
    return(
        <div className="main">
            <Card style={{background:"hsl(31, 77%, 52%)"}} img={SedanImg} name="SEDANS" description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip." btn={{color:"hsl(31, 77%, 52%)"}} />
            <Card style={{background:"hsl(184, 100%, 22%)"}} img={SuvsImg} name="SUVS" description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures." btn={{color:"hsl(184, 100%, 22%)"}} />
            <Card style={{background:"hsl(179, 100%, 13%)"}} img={LuxuryImg} name="LUXURY" description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style." btn={{color:"hsl(179, 100%, 13%)"}} />
        </div>
    )
}

export default App;