const express = require ('express')// импортируем библиотеку express
const userRouter = require('/routs/user.routs.js')

const PORT = 5000 // задаем порт для работы сервера
const app = express()


app.use(express.json())
app.use('/api', userRouter)

// вызов функции express
app.listen(PORT,() => {
    console.log('сервер запущен' + PORT)
})
