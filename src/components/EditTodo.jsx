import React, {useEffect }  from 'react'
import {  useParams } from 'react-router-dom'
import Form from "./Form";

//Add TODO component
const EditTodo = (props) =>  {
    
    var {id} = useParams();

    useEffect(()=>{
        props.getTodo(id)
    })

    return id===props.currentTodo.id ? <Form currentTodo={props.currentTodo} updateTodo={props.updateTodo}/> : <div>Loading...</div>
}

export default EditTodo;