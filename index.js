const express = require ('express')// импортируем библиотеку express
const userRouter = require('./routs/user.routs.js') // роутеры юзеров
const postRouter = require('./routs/postRouts.js') // роутеры постов

const PORT = 5000 // задаем порт для работы сервера
const app = express()


app.use(express.json()) // для чтения json формата
app.use('/api', userRouter) // роутеры юзеров
app.use('/api', postRouter) // роутеры постов

// вызов функции express
app.listen(PORT,() => {
    console.log('сервер запущен' + PORT)
})
