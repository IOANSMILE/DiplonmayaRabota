const db = require('../dbPG')

async function checkAuth (req, res){ // роверка авторизации пользователя
    const userID = req.cookies.userID
    if (!userID){
        throw new Error('NOT_FOUND_USER_ID')
    }
    const data  = await db.query(`SELECT * FROM person WHERE id = ${userID}`)
    if (!data.rows[0].email){
        throw new Error('USER_NOT_FOUND')
    }
    return data.rows[0]

}



module.exports = {checkAuth}
