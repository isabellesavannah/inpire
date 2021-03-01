import {ProxyState} from "../AppState.js"
import Todo from "../Models/todo.js"
import {todoApi} from "./axios.js"
class TodoService{
    constructor(){
        this.getTodo()
    }
    async getTodo(){
        try {
            const res = await todoApi.get('')
            ProxyState.todo = res.data.map(rawTodoData => new Todo(rawTodoData))
        }catch (error){
            console.error(error)
        }
    }
    async createTodo(rawTodo){
        try{
            const res = await todoApi.post('', rawTodo)
            ProxyState.todo = [...ProxyState.todo, new Todo(res.data)]
        }catch (error){
            console.error(error)
        }
    }
    async deleteTodo(_id){
        try{
            const res = await todoApi.delete(_id)
            this.getTodo()
        }catch(error){
            console.error(error)
        }
    }
    checked(todoId){
        let foundTodo = ProxyState.todo.find(t=> t.id == todoId)
        foundTodo.completed = !foundTodo.completed
        ProxyState.todo = ProxyState.todo
    }
}
export const todoservice = new TodoService()