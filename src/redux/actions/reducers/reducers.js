
import { ADD_TODO, FILTER_TODO, MARK_ALL_COMPLETED_TODO, MARK_COMPLETED_TODO, REMOVE_TODO, SEARCH_TODO, TOGGLE_TODO } from "../actionTypes"

const intialState ={
    todos:[],
    filter:'ALL',
    search:''
}

const todoReducers=(state=intialState,action)=>{
    switch(action.type){
        case ADD_TODO :
            return{
            todos:[...state.todos,{
                text :action.payload.text,completed:false
            }],
            filter:state.filter,
            search: state.search
            }
        case TOGGLE_TODO:
            return{
                todos :state.todos.map((todo,index)=>index===action.payload.id?
            {todo,completed : !todo.completed}:todo),
            filter:state.filter,
            search: state.search
            }   
            
        case REMOVE_TODO:
            return{
                todos:state.todos.filter((todo,index)=>index !==action.payload.id ),
                filter:state.filter,
            search: state.search
            }   
        case MARK_COMPLETED_TODO:
            return{
                todos : state.todos.map((todo,index)=>
                index===action.payload.id?
                {...todo,completed:true}:todo)
            }  
            
        case FILTER_TODO:
            return{
                todos:state.todos,
                filter:action.payload.filter,
                search : state.search

            }
        case SEARCH_TODO:
            return{
                todos: state.todos,
                filter:state.filter,
                search:action.payload.search

            }  
        case MARK_ALL_COMPLETED_TODO:
            return{
                todos:state.todos.map((todo)=>
                    ({...todo,completed:true})
            ),
                filter:state.filter,
                search:state.search
            }    
        default :
        return state    


    }
   
}
export default todoReducers