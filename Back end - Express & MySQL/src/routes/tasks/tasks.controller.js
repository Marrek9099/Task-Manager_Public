const {getTasks, addNewTask, editTask, deleteTask } = require('../../data/tasks/tasks.data')

async function httpAddNewTask(req, res){

    const newTaskData = req.body

      // New task data validation

    const validationErrors = {}

    if (!newTaskData.description) 
        validationErrors.description = 'Please enter task description'
      
    if (!newTaskData.category) 
        validationErrors.category = 'Please choose a task category'
      
    if(Object.values(validationErrors).length > 0) {
        return res.status(400).json({error: validationErrors})
    }

    try {
        newTaskId = await addNewTask(newTaskData)
 
 
        const newTask = {
             id: newTaskId,
             ...newTaskData
         }
 
         return res.status(201).json(newTask)
     }
     catch(err) {
         console.log(err)
         return res.status(400).json({eror: 'wrong task data'})
     }

}

async function httpGetTasks(req, res){

    const userId = req.user.id

    try {
        const tasks = await getTasks(userId)

        return res.status(200).json(tasks)
    }
    
    catch(err) {
     
       return res.status(500).json({error: 'Server error'})
    }

}

async function httpEditTask(req, res){

    const taskId = req.params.id
    
    const taskDetails = req.body

    try {

        await editTask(taskId, taskDetails)

        const editedTask = {
            id:taskId,
            ...taskDetails
        }

        return res.status(200).json(editedTask)
    }
    
    catch(err) {

       return res.status(400).json({error: 'Wrong task data'})
    }

}

async function httpDeleteTask(req, res){

    const taskId = req.params.id
    

    try {
        await deleteTask(taskId)

        return res.status(200).json({sucess: 'Task deleted'})
    }
    
    catch(err) {
       return res.status(500).json({error: 'Server error'})
    }

}


module.exports = {
    httpGetTasks,
    httpAddNewTask,
    httpEditTask,
    httpDeleteTask  
}