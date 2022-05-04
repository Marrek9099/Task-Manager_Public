import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Input from './Input'
import Select from './Select'
import {createTask} from '../actions/index'

const AddTaskForm = ({createTask, handleSubmit}) => {
    const onSubmit = formValues =>  createTask(formValues)
   

    return ( <div>
                <div className="text-success">Add a new task</div>
                <form onSubmit={handleSubmit(onSubmit)} className=" addTask p-3 my-2">  
                    <div className="form-group">
                        <label htmlFor="description">Task Description</label>
                        <Field name="description" component={Input} type='description' id='description' placeholder="Enter task description"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Task category</label>
                        <Field name="category" defaultValue='normal' component={Select} type='category' id='category'/>
                    </div>
                    <button type="submit" className="btn btn-success">Add</button>   
                </form>

            </div>
    )


}

const validate = formValues => {
    const errors = {}
    
    if (!formValues.description) {
        errors.description = 'Please enter task description'
    }
    if (!formValues.category) {
        errors.category = 'Please choose a task category'
    }
    return errors
}



export default connect(null, {createTask})(reduxForm({
    form: 'Add Task Form',
    validate
})(AddTaskForm))