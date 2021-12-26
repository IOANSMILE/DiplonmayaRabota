const Router = require('express') // получаем роутер
const router = new Router() // создаем объект класса роутер
const registrationController = require('../controller/registrationController.js') // экспортируем контроллер user

router.get('/',  registrationController. registrationView) // получение всех пользователей

module.exports = router