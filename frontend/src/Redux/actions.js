import { apiConnector } from "../services/apiConnector";
import { deleteTodoByID, getAllTodos, saveTodo } from "../services/apis";
import { CHNAGE_FLAG_TO_FETCH_TODOS_TO_TRUE, SAVE_ALL_TODOS, UPDATE_TODOFORM } from "./actionType"

export const updateTodoForm = (data,fieldName) =>{
    console.log(fieldName);
    return {
        type : UPDATE_TODOFORM,
        payload : data ,
        fieldName : fieldName
    }
}

export const saveAllTodos = (data) =>{
    console.log('data',data)
    return{
        type:SAVE_ALL_TODOS,payload : data
    }
}

export const makeApiCallToSaveTodo = (data) =>{
    return async(dispatch) =>{
       const res = await apiConnector('post',saveTodo.SAVETODO_API,data,null,null)
       if(res?.data?.messsage === 'Todo created successfully'){
        dispatch(changeFlagToFetchTodo())
       } 
    }
}

export const fetchAllTodos = () =>{
    return async(dispatch) =>{
       const res = await apiConnector('get',getAllTodos.GET_ALL_TODOS_API,null,null,null)
       console.log(res.data.allTodos)
       dispatch(saveAllTodos(res.data.allTodos))
    }
}

export const changeFlagToFetchTodo = () =>{
    return{
        type:CHNAGE_FLAG_TO_FETCH_TODOS_TO_TRUE
    }
}

export const deleteTodo = (id)=>{
    return async(dispatch) =>{
        const res = await apiConnector('delete',deleteTodoByID.API+id,null,null,null)
        console.log(res.data.todoDeleteSuccess)
        if(res.data.todoDeleteSuccess){
            dispatch(changeFlagToFetchTodo())
        }
        
        
     }
}