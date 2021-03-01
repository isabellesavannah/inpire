import {ProxyState} from "../AppState.js"
import {quoteService} from "../Services/QuoteService.js"
function _drawQuote(){
    let quote = ProxyState.quote
    document.getElementById("quote").innerHTML = quote
    console.log(quote)
}
function _drawAuthor(){
    let author = ProxyState.author
    document.getElementById("author").innerHTML = author
}
export default class QuoteController{
    constructor (){
        _drawQuote
        ProxyState.on("quote", _drawQuote)
        ProxyState.on("author",_drawAuthor)
        
    }
}