const express = require ('express')// импортируем библиотеку express
const userRouter = require('./routs/user.routs.js') // роутеры юзеров
const postRouter = require('./routs/postRouts.js')
const authRouter = require('./routs/authRouter.js')
const basketRouter = require('./routs/basketRout.js')
const path = require("path"); // роутеры постов

const PORT = 5000 // задаем порт для работы сервера
const app = express()

app.use(express.static('public')) // создание папки
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/view/index.html' ))
})


app.use(express.json()) // для чтения json формата
app.use('/api', userRouter) // роутеры юзеров
app.use('/api', postRouter) // роутеры постов
app.use('/auth', authRouter) // роутеры аутентификации
app.use('/basket', basketRouter) // роутер корзины


// вызов функции express
app.listen(PORT,() => {
    console.log('сервер запущен' + PORT)
})
