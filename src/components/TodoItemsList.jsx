import TodoItem from './TodoItem';
import './TodoItemsList.css'

function TodoItemsList({todos, setTodos}){

  return (
    <div className="items-container">  
      { todos.map((todo, index) => (
          <TodoItem
            key={index}
            index = {index}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
      ))}
    </div>  
  );
}
export default TodoItemsList;
