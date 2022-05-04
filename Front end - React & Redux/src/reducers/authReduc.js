const INITIAL_STATE = {
    hasAccess: null,
    userData: null
}


const authReduc = (state=INITIAL_STATE, action) => {
    switch(action.type) {
       case 'IS_SIGNED_IN':
            return {...state, hasAccess: true, userData: action.payload}
       case 'SIGN_IN':
            return {...state, hasAccess: true, userData: action.payload}
       case 'SIGN_UP':  
            return {...state, hasAccess: true, userData: action.payload}
       case 'SIGN_OUT':
            return {...state, hasAccess: null, userData: null}
       default:
            return {...state}
        }
}

  


export default authReduc