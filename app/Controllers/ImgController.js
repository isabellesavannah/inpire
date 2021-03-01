import {ProxyState} from "../AppState.js";
import {imgService} from "../Services/ImgService.js"
function _drawImg(){
    let img = ProxyState.img
    document.body.style.backgroundImage= `url('${img}')`
}

export default class ImgController{
    constructor(){
        ProxyState.on("img", _drawImg)
    }
}