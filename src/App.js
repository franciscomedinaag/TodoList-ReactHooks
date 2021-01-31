import { useState } from "react";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodo";
import {v4 as uuidv4} from 'uuid';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Nabvar from "./components/Navbar";

function App() {

  //data model
  const todoList=[
    {id:uuidv4(), desc:'Go to bed', done:false},
    {id:uuidv4(), desc:'Go to work', done:true},
    {id:uuidv4(), desc:'Take coffe', done:false}
  ]

  //state data model set
  const [todos, setTodos] = useState(todoList);

  //function add todo
  const addTodo=(todo)=>{
    todo.id=uuidv4()
    todo.done=false
    setTodos([
      ...todos,
      todo
    ])
  }

  //function delete todo
  const deleteTodo = (id) =>{
    setTodos(todos.filter(todo=>todo.id !== id))
  }

  //edit todo

  const cleanTodo={ id:null, desc:"", done:false}
  
  const [currentTodo, setCurrentTodo] = useState({cleanTodo});

  const setEditRow = (todo) => {
    setCurrentTodo({
      id:todo.id, desc:todo.desc, done:todo.done
    })
  }

  const updateTodo = (updatedTodo)=>{
    setTodos(todos.map(todo=>(todo.id===updatedTodo.id ? updatedTodo : todo)))
  }

  const getTodo = (id) => {
    todos.map(todo=>{
      if(id===todo.id){
        setCurrentTodo(todo);
      }
      return todo
    })
  }

  //Base app
  return (
    <Router>
     <Nabvar></Nabvar>
      <div className="container">
      <Switch>
        <Route path="/details/:id">
          <EditTodo currentTodo={currentTodo} updateTodo={updateTodo} getTodo={getTodo}/> 
          </Route>
        <Route path="/" exact>
        <div className="row">
          <div className="col">        
              <div>
              <TodoList 
              todos={todos}
              deleteTodo={deleteTodo}
              setEditRow={setEditRow}
              addTodo={addTodo}/>
          </div>
        </div> 
        </div>    
        </Route>
      </Switch>
       </div>
   </Router>
  );
}

export default App;
