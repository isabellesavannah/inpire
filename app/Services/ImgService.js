import {ProxyState} from "../AppState.js";
import { imgApi } from "./axios.js";
class ImgService{
    constructor(){
        this.getImg()
    }
    async getImg(){
        try{
            const res = await imgApi.get("")
            //console.log(res.data)
            //console.log(res)
            ProxyState.img = res.data.url
        }catch(error){
            console.error(error)
        }
    }
}
export const imgService = new ImgService()