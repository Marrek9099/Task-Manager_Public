import React, {useRef} from 'react'
import { connect } from 'react-redux'
import { editTask } from '../actions'


const Modal = ({editTask, task}) => {
    const updatedDesc = useRef(null)
    const updatedCateg = useRef(null)

    return <div className="modal fade" id={`t${task.id}`} tabIndex="-1" role="dialog" aria-labelledby={`${task.id}abel`} aria-hidden="true">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id={`${task.id}abel`}>Edit Task</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                        <label className="m-1"htmlFor="description">Description:</label>
                        <input className="form-control" ref={updatedDesc} defaultValue={task.description} id="description" type="text" maxLength="40"/>
                        <label className="m-1"htmlFor="category">Category:</label>
                        <select className="form-control m-1" ref={updatedCateg} defaultValue={task.category}  id="category">
                            <option value="normal">Normal</option>
                            <option value="important">Important</option>
                            <option value="critical">Critical</option>
                        </select>    
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button data-dismiss="modal" onClick={() => editTask(task.id, {...task, description: updatedDesc.current.value, category: updatedCateg.current.value})} type="button" className="btn btn-success">Save changes</button>
                    </div>
                </div>
                </div>
           </div>
}

export default connect(null , {editTask})(Modal)