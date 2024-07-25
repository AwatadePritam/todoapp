export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL


export const saveTodo ={

    SAVETODO_API:BACKEND_BASE_URL+'/saveTodo'
}

export const getAllTodos = {
    GET_ALL_TODOS_API:BACKEND_BASE_URL+'/getAllTodos'
}

export const deleteTodoByID = {
    API:BACKEND_BASE_URL+'/deleteTodo/'
}