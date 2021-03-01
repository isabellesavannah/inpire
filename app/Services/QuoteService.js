import {ProxyState} from "../AppState.js"
import {quoteApi} from "./axios.js"
import Quote from "../Models/Quote.js"
class QuoteService{
    constructor(){
        this.getQuote()
        this.getAuthor()
    }
    async getQuote(){
        try{
            const res = await quoteApi.get("")
            console.log(res.data)
            ProxyState.quote = res.data.content
        }catch(error){
            console.error(error)
        }
    }
    async getAuthor(){
        try{
            const res = await quoteApi.get("")
            console.log(res.data.author)
            ProxyState.author = res.data.author
        }catch(error){
            console.error(error)
        }
    }
}
export const quoteService = new QuoteService()