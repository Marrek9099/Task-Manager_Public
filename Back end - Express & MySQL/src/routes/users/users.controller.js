const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const {addUser, findUserByEmail}  = require('../../data/users/users.data')
const {addUserToken, removeUserToken } = require('../../data/users/users.tokens.data')


async function httpAddNewUser( req, res ) {
    
    const newUserData = req.body


    // New user data validation
    

    // Name field validation

    const validationErrors = {}

    if(!newUserData.name)
        validationErrors.userName = 'Name is required'
    

    if(newUserData.name.length < 4)
        validationErrors.userName = 'Name field must be at least 4 characters long'
    

    // Email validation

    if(!newUserData.email)
        validationErrors.email = 'Email is required'

    else if(!newUserData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
        validationErrors.email = 'Invalid email'
  
    
    // Password validation

    if(newUserData.password) {

        const passwordErrors = []

        if (!newUserData.password.match(/[a-z]/g)) 
               passwordErrors.push('Password must include at least 1 lowercase character')
            
        if (!newUserData.password.match(/[A-Z]/g))
               passwordErrors.push('Password must include at least 1 uppercase character')
               
        if (!newUserData.password.match(/[0-9]/g))
               passwordErrors.push('Password must include at least 1 number')

        if (!newUserData.password.match(/[!@#$%^&*(),.?":{}|<>]/g))
               passwordErrors.push('Password must include at least 1 special character')
        
        if (newUserData.password.length < 8)
               passwordErrors.push('Password must be at least 8 charactesrs long')
    
        if(newUserData.password.includes(' '))
               passwordErrors.push('Password contains empty spaces')

        
        if(passwordErrors.length > 0) {
            validationErrors.password = passwordErrors
        }

    }
    else {
        validationErrors.password = 'Passowrd is required'
    }

    if(Object.values(validationErrors).length > 0) {
        return res.status(400).json({error: validationErrors})
    }

    newUserData.password = await bcrypt.hash(newUserData.password, 8)

    let newUserId

    try {
       newUserId = await addUser(newUserData)

       const token = jwt.sign({id: newUserId}, 'secret')

       const newUser = {
            id: newUserId,
            name:  newUserData.name,
            email: newUserData.email,
            token
        }

        console.log('user created')

        await addUserToken(newUser)

        return res.status(201).json(newUser)
    }
    catch(err) {
        console.log(err)
        return res.status(400).json({eror: 'Email already in use'})
    }
}

async function httpLoginUser(req, res){

    const user = req.body

    try {

        const foundUser = await findUserByEmail(user.email)

        if(!foundUser){
            return res.status(400).json({error: 'No user with such email'})
        }

        const isMatch = await bcrypt.compare(user.password, foundUser.password)

        if(isMatch) {

            const token = jwt.sign({id: foundUser.id}, 'secret')

            const loggedUser = {
                id: foundUser.id,
                name: foundUser.name,
                email: foundUser.email,
                token 
            }

            await addUserToken(loggedUser)

            return res.status(200).json(loggedUser)
        } 
        else {
            return res.status(400).json({error: 'Incorrect password'})
        }    

    }
    catch {
        return res.status(400).json({error: 'Wrong log in credentials'})
    }
    
}

async function httpLogoutUser(req, res){

    const token = req.header('Authorization').replace('Bearer ', '')

    try {
        await removeUserToken(token)
    }
    catch(err) {
        console.log(err)
    }

    return res.status(200).json({message: 'user has been logged out'})
}





module.exports = {
    httpAddNewUser,
    httpLoginUser,
    httpLogoutUser
}

