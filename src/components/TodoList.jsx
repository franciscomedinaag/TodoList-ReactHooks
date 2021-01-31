import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import AddTodo from "./AddTodo";


//list TODO component
const TodoList = (props) =>{
    
    const [filteredTodos, setFilteredTodos] = useState(props.todos);
    const [search, setSearch] = useState("");
    const [checkedVar, setChecked] = useState("");
    
    useEffect(() => {   

            setFilteredTodos (props.todos.filter(
                (todo)=>{
                    return todo.desc.toLowerCase().indexOf(search.toLowerCase())!==-1;
                }
            ))  
        
    },[search, props.todos])

    useEffect(()=>{
        setChecked("")
    },[checkedVar])

    return (
        <div>
            <div className="row">  
            <div className="col-sm-10  mt-5 ">
                <input className="form-control"  type="text" name="search" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div className="col-sm-2  mt-5 mb-5">
                <AddTodo addTodo={props.addTodo} /> 
            </div>
            </div>
            <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Done</th>
                <th scope="col">Activity</th>
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                filteredTodos.length > 0 ?
                filteredTodos.map(todo => {
                        return(
                            <tr key={todo.id} className={todo.done ? 'done' : 'not-done'}>
                                <td>
                                    <input checked={todo.done} className="check" type="checkbox" name="done"
                                        onChange={(e) => {
                                            setChecked(!todo.done)
                                            todo.done=!todo.done   
                                        }}
                                    />
                                </td>

                                <td>{todo.desc}</td>

                                <td><Link to={"/details/"+todo.id} className="btn btn-info">
                                    Details</Link>
                                </td>

                                <td><button type="button" className="btn btn-danger" 
                                    onClick={()=>{
                                        props.deleteTodo(todo.id)
                                    }}>
                                    Delete</button>
                                </td>
                            </tr>
                        )
                    }) : (
                        <tr>
                            <td colSpan={4}>No activities</td>
                        </tr>
                    )
                }
            </tbody>
            </table>
        </div>
    );
}

export default TodoList;