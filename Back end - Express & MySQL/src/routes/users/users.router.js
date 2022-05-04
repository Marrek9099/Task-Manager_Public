const express = require('express')

const {httpAddNewUser, httpLoginUser, httpLogoutUser} = require('./users.controller')

const usersRouter = express.Router()

usersRouter.post('/', httpAddNewUser)

usersRouter.post('/login', httpLoginUser)

usersRouter.post('/logout', httpLogoutUser)

module.exports = usersRouter

