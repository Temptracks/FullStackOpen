import axios from 'axios'
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q="
const api_key = import.meta.env.VITE_SOME_KEY

const getWeather = (capital) => {
    const request = axios.get(`${baseUrl}${capital}&appid=${api_key}&units=metric`)
    return request.then(res => res.data)
}

export default {getWeather}