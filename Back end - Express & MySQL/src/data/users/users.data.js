const db = require('../db')



async function addUser(user){

    const newUserData = Object.values(user)

    let sql = 'INSERT INTO users (name, email, password) values (?)'

    await db.query(sql, [newUserData])

    sql = 'SELECT LAST_INSERT_ID()'

    let newUserId = await db.query(sql)

    return newUserId[0][0]['LAST_INSERT_ID()']

}   

async function findUserByEmail(email) {

    let sql = `SELECT * FROM users WHERE email = '${email}'`

    const foundUser = await db.query(sql)
    
    return foundUser[0][0]

}

async function findUserById(id) {

    let sql = `SELECT * FROM users WHERE id = ${id}`

    const foundUser = await db.query(sql)
    
    return foundUser[0][0]

}

module.exports = {
    addUser,
    findUserByEmail,
    findUserById
}

