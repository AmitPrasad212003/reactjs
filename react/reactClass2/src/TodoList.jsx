import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let [todos, setTodos] = useState([{task : "sample task", id: uuidv4(), isdone: false}]);
    let [newTodo, setNewTodos] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task : newTodo, id:uuidv4(), isDone: false}];
        });
        setNewTodos("");
    }

    let updateTodoValue = (event) => {
        setNewTodos(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id)); 
    }

    let markAllDone = () => {
        setTodos((prevTodos) => (prevTodos.map((todo) => {
            return {
                ...todo,
                isDone : true,
            };
            
        })));
    }

    let markAsDone= (id) => {
        setTodos((prevTodos) => (prevTodos.map((todo) => {
            if(todo.id == id){
                return {
                ...todo,
                isDone : true,
                };
            }else{
                return todo;
            }
            
        })));
    }

    return(
        <div>
            <h4>Todo List</h4>
            <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <br />

            <h4>Tasks Todo</h4>
            <hr />
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine : "line-through"} : {}}>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}><i class="fa-solid fa-trash-can"></i></button>
                            <button onClick={() => markAsDone(todo.id)}>Done</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={markAllDone}>Done All</button>
        </div>
    )
}