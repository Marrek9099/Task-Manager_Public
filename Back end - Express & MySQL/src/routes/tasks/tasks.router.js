const express = require('express')

const auth = require('../../middleware/auth')

const {httpAddNewTask, httpGetTasks, httpEditTask, httpDeleteTask} = require('./tasks.controller')

const tasksRouter = express.Router()

tasksRouter.post('/', auth, httpAddNewTask)
tasksRouter.get('/', auth, httpGetTasks)
tasksRouter.put('/:id', auth, httpEditTask)
tasksRouter.delete('/:id', auth, httpDeleteTask)


module.exports = tasksRouter
