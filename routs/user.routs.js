const Router = require('express') // получаем роутер
const router = new Router() // создаем объект класса роутер
const userController = require('../controller/user.controller.js') // экспортируем контроллер user

router.post('/user', userController.createUsers) // создание пользователя
router.get('/user/:id', userController.getOneUsers) // получение конкретного кользователя
router.get('/user', userController.getUsers) // получение всех пользователей
router.put('/user', userController.updateUsers) // обновить пользователя
router.delete('/user/:id', userController.deleteUsers) // удалить пользователя

module.exports = router