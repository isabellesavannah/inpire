import {ProxyState} from "../AppState.js"
import {weatherApi} from "./axios.js"
class WeatherService{
    constructor(){
        this.getWeather()
    }
    async getWeather(){
        try{
            const res = await weatherApi.get("")
            //console.log(res)
            ProxyState.weather = res.data.main.feels_like
        }catch(error){
            console.error(error)
        }
    }
}
export const weatherService = new WeatherService()