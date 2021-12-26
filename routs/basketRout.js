const Router = require('express') // получаем роутер
const router = new Router() // создаем объект класса роутер
const basketController = require('../controller/basketController.js') // экспортируем контроллер user

router.get('/', basketController.basketView)

module.exports = router