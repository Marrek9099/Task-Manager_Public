const db = require('../db')

async function addUserToken(userData){

    let userId = userData.id
    let token = userData.token

    let sql = `INSERT INTO tokens (user_id, token) values (${userId}, '${token}')`

    try {
        await db.query(sql)
    }
    catch(err) {
        console.log(err)
    }
    
}

async function removeUserToken(token){

    let sql = `DELETE FROM tokens WHERE token = '${token}'`

    try {
        await db.query(sql)
    }
    catch(err) {
        console.log(err)
    }

} 

async function isValidToken(userId, token) {

    let sql = `SELECT * FROM tokens WHERE token = '${token}' AND user_id = ${userId}`

    let result 

    try {
        result = await db.query(sql)
    }
    catch(err) {
        console.log(err)
    }

    return result[0].length > 0


}


module.exports = {
    addUserToken,
    removeUserToken,
    isValidToken
}