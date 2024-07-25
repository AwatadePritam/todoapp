import { CHNAGE_FLAG_TO_FETCH_TODOS_TO_TRUE, SAVE_ALL_TODOS, UPDATE_TODOFORM } from "./actionType";

const initialState ={
    todoFormData:{
        todoName:'',
        assignee:'',
        priority:''
    },
    flagToFetchAllTodos:true,
    allTodos:null,
}

export const reducer = (state=initialState,action) =>{
    switch (action.type) {
        case UPDATE_TODOFORM:
            return {
                ...state,todoFormData:{...state.todoFormData,[action.fieldName]:action.payload}
            }
            break;
        case SAVE_ALL_TODOS:
             return {
                ...state,allTodos:action.payload,flagToFetchAllTodos:false
            }
            break;
        case CHNAGE_FLAG_TO_FETCH_TODOS_TO_TRUE:
            
        return{
            ...state,flagToFetchAllTodos:true

        }
        break;
    
        default:
            return state;
            break;
    }

}