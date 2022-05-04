import _ from 'lodash';

const taskReducer = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_TASKS':
            return { ...state, ..._.mapKeys(action.payload, 'id')}
        case 'CREATE_TASK':
            return { ...state, [action.payload.id]: action.payload}
        case 'CLEAR_TASKS':{
            return {...{}}
        }
        case 'EDIT_TASK':
            return { ...state, [action.payload.id]: action.payload}
        case 'DELETE_TASK':
            return _.omit(state
            , action.payload)
        default:
            return state
    }
}

export default taskReducer