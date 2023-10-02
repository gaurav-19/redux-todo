
export const addTodoAction = (text) => {
    return {
        type: 'ADD', 
        text
    }
}

export const deleteTodoAction = (id) => {
    return {
        type: 'DELETE', 
        id
    }
}

export const updateTodoAction = (id) => {
    return {
        type: 'UPDATE', 
        id
    }
}

