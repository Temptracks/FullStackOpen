import { useState, useEffect } from "react"
import weatherService from '../services/weather'

const Weather = ({capital}) => {

    const [weather, setWeather] = useState(null)
    
    useEffect(() => {
        if (capital) {
            weatherService.getWeather(capital).then(res => {
                console.log('res', res)
                setWeather(res)
            })
        }
    }, [])
    
    if (!weather) {
        return null
    }

    return (
        <div>
            <h3>Weather in {capital}</h3>
            <p>temperature {weather.main.temp} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <p>wind {weather.wind.speed} m/s</p>
        </div>
    )
}

export default Weather