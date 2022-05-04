import React from 'react'
import { connect } from 'react-redux'
import Modal from './Modal'
import { deleteTask, editTask } from '../actions'

const Task = ({task, deleteTask, editTask}) => {
    const color = task.category
    
    
    if(task.completed) {
        return <div  className={`task ${color} my-2`}>
                    <div className="taskIcons d-flex justify-content-end p-1">
                        <i onClick={() => editTask(task.id, {...task, completed: false})}className="fas fa-redo mr-2"></i>
                    </div>
                    <div><del>{task.description}</del></div>
               </div>    
        }
    else {
        return <div  className={`task ${color} my-2`}>
                    <div className="taskIcons d-flex justify-content-end p-1">
                        <i data-toggle="modal" data-target={`#t${task.id}`} className="fas fa-edit mr-4"></i>
                        <i onClick={() => editTask(task.id, {...task, completed: true})} className="fas fa-check mr-4"></i>
                        <i onClick={() => deleteTask(task.id)} className="fas fa-trash-alt mr-2"></i>
                    </div>
                    <div>{task.description}</div>
                    <Modal task={task}/>
                </div>
    }


    
}

export default connect(null, { deleteTask, editTask })(Task)