const Router = require('express') // получаем роутер
const router = new Router() // создаем объект класса роутер
const adminController = require('../controller/adminController.js') // экспортируем контроллер user

router.get('/', adminController.admin)






module.exports = router