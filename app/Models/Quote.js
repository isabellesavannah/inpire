export default class Quote{
    constructor(data){
        this._id = data._id
        this.author = data.author
        this.content = data.content
    }
    get ActiveQuote(){
        return /*html*/`
        <div>
            <h3>${this.author}</h3>
            <p>${this.content}</p>
        </div>`
    }
}