const Router = require('express') // получаем роутер
const router = new Router() // создаем объект класса роутер
const postControllers = require('../controller/postController.js') // экспортируем контроллер постов
const multer = require("multer"); // экспортируем контроллер постов

const storageConfig = multer.diskStorage({ // настройки загрузки файла
    destination: (req, file, cb) => {
        cb(null, "public/upload");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
const fileFilter = (req, file, cd) => { // настройки фильтрации файлов
    if (file.mimetype === "image/jpg" || file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
        cd(null, true)
    } else {
        cd(null, false)
    }
}
const upload = multer({storage: storageConfig, fileFilter: fileFilter}).single("filedata")

router.post('/post', upload, postControllers.createPost) // создание поста
router.get('/post/:id', postControllers.getPostByUser) // получение конкретного поста поста
router.get('/post', postControllers.getPost) // получение всех постов
router.put('/post', postControllers.updatePost) // обновление поста
router.delete('/post/:id', postControllers.deletePost) // даление поста

module.exports = router