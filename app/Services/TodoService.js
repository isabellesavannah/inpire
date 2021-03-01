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
    async checked(id){
        let todo = ProxyState.todo.find (t=> t._id == id)
        //debugger
        todo.completed = !todo.completed
        try{
        const res = await todoApi.put('' + id, todo)
        ProxyState.todo = ProxyState.todo
        }catch (error){
            console.error(error)
        }
        
    }
}
export const todoservice = new TodoService()