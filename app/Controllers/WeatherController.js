import {ProxyState} from "../AppState.js"
import {weatherService} from "../Services/WeatherService.js"
function _drawWeather(){
    let weather = ProxyState.weather
    document.getElementById("weather").innerHTML = `<h3>Weather:${weather}</h3>`
}
export default class WeatherController{
    constructor(){
        _drawWeather
        ProxyState.on("weather",_drawWeather)
    }
}