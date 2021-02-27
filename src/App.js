import './App.css';
import React from 'react'
import WeatherItems from "./WeatherItem";
import {WEATHER} from "./config";


function App() {

    return (
        <div className="wrapper">
            <WeatherItems weather={WEATHER}/>
        </div>
    );
}

export default App;
