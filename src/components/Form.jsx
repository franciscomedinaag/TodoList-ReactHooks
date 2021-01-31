import React  from 'react'
import { Link } from 'react-router-dom'
import {useForm} from "react-hook-form";
import { useHistory } from 'react-router-dom';

//Add TODO component
const Form = (props) =>  {
    const history = useHistory();

    const{register, handleSubmit} = useForm({
        defaultValues: props.currentTodo
    });
    
    const onSubmit = ((data, e) => {
        let updatedTodo={
            id:props.currentTodo.id,
            desc:data.desc,
            done:data.done
        }
        props.updateTodo(updatedTodo)

        history.push('/')

    })
    
    //const {register, errors, handleSubmit, setValue} = useForm({
    //    defaultValues:props.currentTodo
    //});


    return(     
       <form onSubmit={handleSubmit(onSubmit)}>
           <label className="mr-2">Todo: </label>
            <input  ref={register} className="check" type="checkbox" name="done" />
           
            <input  ref={register} className="form-control mb-2"  type="text" name="desc" placeholder="Todo..." />
            <button type="submit" className="btn btn-primary">Edit Todo</button> 
            <br></br>
            <Link to={"/"} className="goHome" >
                Go Home
            </Link>   
       </form> 
       
    )
}

export default Form;