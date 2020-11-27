import React from 'react';
import Todo from './todo';

const TodoList = ({todos,setTodo,filteredTodo}) =>{
	return(
		<div className="todo-container">
      <ul className="todo-list">
      	{filteredTodo.map((todo)=>(
      		<Todo key={todo.id} todo={todo} todos={todos} setTodo={setTodo}/>
      		))}
      </ul>
    </div>
		)
}

export default TodoList