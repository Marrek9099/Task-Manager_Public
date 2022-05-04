const jwt = require('jsonwebtoken')

const {findUserById} = require('../data/users/users.data')
const { isValidToken } = require('../data/users/users.tokens.data')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')

        const decoded = jwt.verify(token, 'secret')
        
        const isValidTokenResult = await isValidToken(decoded.id, token)

        if(!isValidTokenResult) {
            throw new Error()
        }

        const user = await findUserById(decoded.id)

        
        if(!user) {
            throw new Error()
        }
        
        req.user = user

        next()

    } catch(e) {
 
        res.status(401).send({ error: 'Please authenticate'})
        
    }
}

module.exports = auth