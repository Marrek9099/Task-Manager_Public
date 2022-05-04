const db = require('../db')

async function addNewTask(task){

    const newTaskData = Object.values(task)

    let sql = 'INSERT INTO tasks (description , completed, user_id, category) values (?)'

    await db.query(sql, [newTaskData])

    sql = 'SELECT LAST_INSERT_ID()'

    let newTaskId = await db.query(sql)

    return newTaskId[0][0]['LAST_INSERT_ID()']
}

async function getTasks(userId) {

    let sql = `SELECT * FROM tasks WHERE user_id = ${userId}`

    let result = await db.query(sql)

    return result[0]

}

async function editTask(taskId, taskDetails) {

    let sql = `UPDATE tasks SET description ='${taskDetails.description}', completed = ${taskDetails.completed}, category = '${taskDetails.category}' WHERE id = ${taskId}`

    await db.query(sql)

}

async function deleteTask(taskId) {

    let sql = `DELETE FROM tasks WHERE id = ${taskId}`


    await db.query(sql)
  
}


module.exports = {
    addNewTask,
    getTasks,
    editTask,
    deleteTask
}