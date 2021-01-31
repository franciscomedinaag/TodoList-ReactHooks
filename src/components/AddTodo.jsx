import React from 'react'
import {useForm} from 'react-hook-form'

//Add TODO component
const AddTodo = (props) =>  {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = ((data, e) => {
        props.addTodo(data);

        e.target.reset();
    })

    return(
       <div>
            <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">
                Add
            </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                                <label>Todo: </label>
                                <input className="form-control" type="text" name="desc" ref={register({
                                    required:{value:true, message: 'Required field'}
                                })} placeholder="Todo..."/>
                                    <div>
                                        {errors?.desc?.message}
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3" >Add todo</button>
                                    <button type="button" className="btn btn-secondary ml-3 mt-3" data-dismiss="modal">Close</button>
                            </form>
                    </div>
                    
                    </div>
                </div>
                </div>
       </div>
    )
}

export default AddTodo;