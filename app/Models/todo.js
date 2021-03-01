export default class Todo{
    constructor(data){
        this.description = data.description
        this._id = data._id
        this.user = data.user
        this.completed = data.completed || false
    }
    get Template(){
        return /*html*/`
        <div class="card">
            <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.todoController.deleteTodo('${this._id}')" aria-hidden="true"></i>
            <div class="card-body">
                <h3 class="card-text">${this.description}</h3>
                <input type="checkbox" ${this.completed ? "checked":""} id="todo" onclick="app.todoController.checked('${this._id}')">
            </div>
         </div>`
    }
}