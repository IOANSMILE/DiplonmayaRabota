const Router = require('express') // получаем роутер
const router = new Router() // создаем объект класса роутер
const authController = require('../controller/authController.js') // экспортируем контроллер user

router.get('/', authController.AuthView) // получение всех пользователей
router.post('/login', authController.AuthUser) // получение логина и пароля






module.exports = router