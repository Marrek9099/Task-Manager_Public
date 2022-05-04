import taskManager from '../apis/taskManager'
import history from '../components/history'
import {reset} from 'redux-form';


export const isSignedIn = userData => {
    history.push('/user/tasks')
    return {
        type: 'IS_SIGNED_IN',
        payload: userData
    }
}

export const signUp = (formValues, submitError) => async (dispatch) => {

    const signUpDetails = {
        name: formValues.name,
        email: formValues.email,
        password: formValues.password
    }
    
    try {
        const response = await taskManager.post('/users', signUpDetails)
        dispatch({type:'SIGN_UP', payload:response.data})
        localStorage.setItem('user', JSON.stringify(response.data))
        history.push('/user/tasks')
    }
    catch(e) {
        submitError()
    }  
}

export const signIn = (formValues, submitError) => async dispatch => { 
    try {
        const response = await taskManager.post('/users/login', formValues)
        dispatch({type:'SIGN_IN', payload:response.data})
        localStorage.setItem('user', JSON.stringify(response.data))
        history.push('/user/tasks')
    }
    catch(e) {
        submitError()
    }
}

export const signOut = () => async (dispatch,getState) => {
        const Authorization = `Bearer ${getState().authReduc.userData.token}`
        localStorage.clear();
        history.push('/')
        await taskManager.post('/users/logout',{},{
            headers: {
                Authorization
            }
        })
        dispatch({type:'SIGN_OUT'})
    
}


export const createTask = taskValues => async (dispatch, getState) => {

    const newTaskDetails = {
        description: taskValues.description,
        completed: false,
        userId: getState().authReduc.userData.id,
        category: taskValues.category
    }

    const Authorization = `Bearer ${getState().authReduc.userData.token}`
    const response = await taskManager.post('/tasks',{...newTaskDetails}, {
        headers: {
            Authorization
        }
    })

    dispatch({type: 'CREATE_TASK', payload: response.data})
    dispatch(reset('Add Task Form'));
}

export const fetchTasks = params => async (dispatch, getState) => {
    dispatch(clearTasks())
    const Authorization = `Bearer ${getState().authReduc.userData.token}`
    const response = await taskManager.get('/tasks',
    {
        headers: {
            Authorization
        },
        params
    })
    
    dispatch({type: 'FETCH_TASKS', payload: response.data})
   

}

export const clearTasks = () => {
    return {type: 'CLEAR_TASKS'}
}


export const editTask = (id, taskValues) => async (dispatch,getState) => {
    
    const Authorization = `Bearer ${getState().authReduc.userData.token}`
    const response = await taskManager.put(`/tasks/${id}`,taskValues,{
        headers: {
            Authorization
        }
        
    })
    
    dispatch({type: 'EDIT_TASK', payload: response.data})
}
export const deleteTask = id => async (dispatch, getState) => {
    const Authorization = `Bearer ${getState().authReduc.userData.token}`
    await taskManager.delete(`/tasks/${id}`,  {
        headers: {
            Authorization
        }
    })

    dispatch({type: 'DELETE_TASK', payload: id})
}
