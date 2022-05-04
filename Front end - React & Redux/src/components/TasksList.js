import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchTasks } from '../actions'
import Task from '../components/Task'




const TasksLists = ({fetchTasks, tasks}) => {


    useEffect( () => {
        const getTasks = async () => {
            await fetchTasks()
        }
        getTasks()
        
    }, [fetchTasks])

    const renderedTasks = () =>  tasks.map( task => <Task key={task.id} task={task}/>)
    


    return <div>
             <div className="text-success">Task List</div>
             <div className="p-3 my-2 taskList">  
                {renderedTasks()}
             </div>

           </div>
}

const mapStateToProps = state => {
    return { tasks: Object.values(state.taskReducer)}
}

export default connect(mapStateToProps,{fetchTasks})(TasksLists)