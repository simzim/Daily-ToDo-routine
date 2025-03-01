import './TodoItem.css' 

function TodoItem({todo, index, todos, setTodos}){
  
  const handleProgress = () => {
    const newTodos = [...todos];
    newTodos[index].progress += 1;

   if(newTodos[index].progress >= newTodos[index].steps){
      newTodos[index].completed = true;
    }
    setTodos(newTodos);
  };

  let progressClass;  
  const progressPercentage = (todo.progress / todo.steps) * 100;  

  if (progressPercentage < 25) {  
      progressClass = 'start';  
  } else if (progressPercentage >= 25 && progressPercentage <= 75) {  
      progressClass = 'mid';  
  } else {  
      progressClass = 'fin';  
  }
  return (
    <div className={`todo-item ${progressClass}`}>
      <h3 className='item-title'>{todo.task}</h3>  
      <div className="progress-container">  
        <div className="progress-bar" style={{width: `${(todo.progress / todo.steps) * 100}%`}}></div>  
      </div> 
      <hr/>
      <div className='btn-block'>
        {todo.completed ?(
          <span className='finish'>All Done!</span>
        ):(
          <button className='btn' onClick={handleProgress}>Make Step</button>
        )}
      </div>
      <hr/>
    </div>  
  );
}
export default TodoItem;