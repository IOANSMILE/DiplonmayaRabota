import express from "express" // импортируем библиотеку express

const PORT = 5000 // задаем порт для работы сервера
const app = express()

app.use(express.json())

// запрос на сервер, параметрами принемает запрос req и ответ res
app.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).json('сервер работает')
})

// вызов функции express
app.listen(PORT,() => {
    console.log('сервер запущен' + PORT)
})
