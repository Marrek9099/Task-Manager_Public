import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import  authReduc from './authReduc'
import  taskReducer from './taskReducer'


export default combineReducers({
    form: formReducer,
    authReduc : authReduc,
    taskReducer : taskReducer
})