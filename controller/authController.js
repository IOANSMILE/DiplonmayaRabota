const db = require('../dbPG') // подключаем БД для создания аккаунта
const path = require("path");
const passwordUtils = require('../utils/password')


class AuthController { // класс будет определять что может наше приложение
    async AuthView(req, res) {  // метод создания пользователя
        res.sendFile(path.join(__dirname, '../view/auth.html'))
    }

    async AuthUser(req, res) {  //
        const email = req.body.emailLoginIN
        const password = req.body.passwordLoginIN

        const loginIN = await db.query(`SELECT * FROM person WHERE email = '${email}' AND password = '${passwordUtils.hash(password)}'`)
        try {
            res.cookie('userID', loginIN.rows[0].id.toString(), { maxAge: 9000000, httpOnly: true });
            res.redirect('/admin')
        } catch (e){
            res.redirect('/auth')
        }

    }


}

module.exports = new AuthController()