const Router = require('express') // получаем роутер
const router = new Router() // создаем объект класса роутер
const postControllers = require('../controller/postController.js') // экспортируем контроллер постов

router.post('/post', postControllers.createPost) // создание поста
router.get('/post', postControllers.getPostByUser) // получение поста


module.exports = router