import React from 'react'
import {Router, Route } from 'react-router-dom'
import history from './components/history'
import Landing from './views/Landing'
import SignUp from './views/SignUp'
import SignIn from './views/SignIn'
import TaskManager from './views/TaskManager'
import './components/Styles.css'



const App = () => {
    return (
        <Router history={history}>
                <Route path='/' exact component={Landing}/>
                <Route path='/signUp' exact component={SignUp}/>
                <Route path='/signIn' exact component={SignIn}/>
                <Route path='/user/tasks' exact component={TaskManager}/>
        </Router>
    )
}

export default App