import React from 'react';

const Form = ({inputText,setInputText,todos, setTodo,setFilter}) => {
	const inputHandler=(e)=>{
		//console.log(e.target.value);
		setInputText(e.target.value)
	}

	const submitTodohandler=(e)=>{
		e.preventDefault();
		if (inputText.trim()!=='')
			setTodo([...todos,{text:inputText,completed:false, id:Math.round(Math.random()*1000)}]);
		setInputText('');

	}

	const filterHandler= (e)=>{
		//console.log(e.target.value);
		setFilter(e.target.value);

	};
	return(
		<form>
      <input value={inputText} onChange={inputHandler} type="text" className="todo-input" placeholder="What's your next Task?"/>
      <button onClick={submitTodohandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={filterHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
		)
}

export default Form;