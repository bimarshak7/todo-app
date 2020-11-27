import React from 'react';

const Todo = ({todo,todos,setTodo}) =>{
	const deleteHandler=()=>{
		setTodo(todos.filter(el=>el.id!==todo.id));

	}

	const completeHandler=()=> {
		setTodo(todos.map((el)=>{
			if(el.id===todo.id){
				return {...el,completed:!el.completed}
			}
			return el;
		}))
	}
	return(
		<div className="todo">
      		<li className={`todo-item ${todo.completed? 'completed':''}`}>{todo.text}</li>
    		<button className='complete-btn' onClick={completeHandler}><i className={`${todo.completed? 'fas fa-undo':'fas fa-check'}`}></i></button>
    		<button className='trash-btn' onClick={deleteHandler}><i className='fas fa-trash'></i></button>
    </div>
		)
}

export default Todo;