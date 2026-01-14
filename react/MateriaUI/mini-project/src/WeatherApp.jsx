import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Delhi",
        temp :25.04,
        tempMin : 25.03,
        tempMax : 25.05,
        humidity : 47,
        feelsLike : 23,
        weather : "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign : "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}