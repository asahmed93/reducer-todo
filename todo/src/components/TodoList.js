import React, {useState, useReducer} from 'react';
import {initialState, TodoReducer} from '../reducers/Reducer'
import Todo from "./Todo"


const TodoList = () => {

    const [state, dispatch] = useReducer(TodoReducer, initialState)
    const  [newTodo, setNewTodo] = useState("")

    const handleChanges = e =>{
        e.preventDefault();
        setNewTodo(e.target.value)
    }

    const handleToggle = (id) => {
        dispatch({ type: "COMPLETE", payload: id})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch({type: "ADD", payload: newTodo})
        setNewTodo("")
    }

    const handleDelete = e =>{
        e.preventDefault();
        dispatch({type: "CLEAR"})
    }

    return(
        <div>
            <Todo state={state} dispatch={handleToggle} />
            <form>
            <label> Add New Todo
            <input 
                type="text"
                name="todo"
                value={newTodo}
                onChange={handleChanges}
            />
            </label>
            <button onClick={handleSubmit}>Add Todo</button>
            <button onClick={handleDelete}>Delete Completed</button>
            </form>
        </div>
    )
}
export default TodoList;    