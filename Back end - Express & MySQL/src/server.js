const path = require('path')
const express = require('express')

const PORT = process.env.PORT || 8000

const app = express()

const usersRouter = require('./routes/users/users.router')
const tasksRouter = require('./routes/tasks/tasks.router')



app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/users', usersRouter)
app.use('/tasks', tasksRouter)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});


app.listen(PORT, () => console.log(`Server listening on port:${PORT}...`))