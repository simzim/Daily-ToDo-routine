import React, { useState } from 'react';  
import './Todo.css'
import TodoItemsList from './TodoItemsList';

function Todo(){
  const [todos, setTodos] = useState([  
    { task: 'Drink 10 cups of water', progress: 0, steps: 10, completed: false }, 
    { task: 'Exercise 3 times', progress: 0, steps: 3, completed: false },   
    { task: 'ToDo something more 5 times', progress: 0, steps: 5, completed: false },  
]);  
  return (
    <div className="screen">  
      <div className='tasks-container'>
        <h1 className='title'>Daily ToDo routine</h1>  
        <TodoItemsList todos={todos} setTodos={setTodos} />  
      </div>
    </div>  
  );
}
export default Todo;