import React,{ useState, useEffect} from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/todoList'

function App() {

  const[inputText,setInputText]=useState("");
  const[todos,setTodo]=useState([]);
  const[filter,setFilter]=useState('all');
  const[filteredTodo, setFilteredTodo]=useState([])

//use effect hooks
  useEffect(() => {
    getLocal();
  },[]);

  useEffect(() => {
    filterHandling();
    saveLocal();
  },[todos,filter]);
  
  const filterHandling=() =>{
    switch(filter){
      case 'completed':
        setFilteredTodo(todos.filter(todo=> todo.completed===true))
        break;

      case 'uncompleted':
        setFilteredTodo(todos.filter(todo=> todo.completed===false))
        break;

      default:
        setFilteredTodo(todos);
    }
  }

  //save to local storage
  const saveLocal= () =>{  
      localStorage.setItem('todos',JSON.stringify(todos));
  }

  const getLocal= () =>{  
    if (localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else {
      let localTodo=JSON.parse(localStorage.getItem('todos'));
      setTodo(localTodo);
    }
  }

  return (
    <div className="App">
      <header>
      <h1><i class="fas fa-tasks"></i> Todo List </h1>
    </header>
    <Form
     todos={todos}
     setTodo={setTodo} 
     inputText={inputText} 
     setInputText={setInputText}
     //filter={filter}
     setFilter={setFilter} />
    <TodoList todos={todos} setTodo={setTodo} filteredTodo={filteredTodo}/>
    </div>
  );
}

export default App;
