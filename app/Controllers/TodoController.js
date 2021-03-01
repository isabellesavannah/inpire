import { ProxyState } from "../AppState.js";
import {todoservice} from "../Services/TodoService.js"
function _drawTodo(){
    let todo = ProxyState.todo
    let Template = ""
    todo.forEach(t=> Template += t.Template)
    document.getElementById("todo").innerHTML = Template
}
export default class TodoController{
    constructor(){
        //_drawTodo
        ProxyState.on("todo", _drawTodo)
    }
    createTodo(event){
        event.preventDefault();
        let form = event.target
        let rawTodo = {
            description: form.description.value
        }
        todoservice.createTodo(rawTodo)
    }
    deleteTodo(_id){
        todoservice.deleteTodo(_id)
    }
    checked(_id){
        todoservice.checked(_id)
    }
}