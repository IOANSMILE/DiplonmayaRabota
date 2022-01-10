const db = require('../dbPG') // подключаем БД для создания аккаунта
class UserController { // класс будет определять что может наше приложение
    async createUsers(req, res){  // метод создания пользователя

        const {name, surname, email, password, number, role} = req.body // получим из тела запроса переменные


        //sql запрос к БД, в функции query пишем sql запрос 'вставить в person'
        const newPerson = await db.query(`INSERT INTO person (name, surname, email, password, number, role)
            values ($1, $2, $3, $4, $5, $6) RETURNING *`, [name, surname, email, password, number, role])
        res.json(newPerson.rows[0]) // возвращаем в json формате
    }
    async getUsers(req, res){ // возващение всех пользователей
        const users =  await db.query(`select * from person`) // запрос к БД на получение всех пользователей
        res.json(users.rows) // возвращаем на клиент вес массив

    }
    async getOneUsers(req, res){  // возвращение конкретного пользователя
        const id = req.params.id // получаем из параметров запроса id
        const user =  await db.query(`select * from person where id = $1`, [id]) // получаем пользователя по id
        res.json(user.rows[0]) // возвращаем его на клиент
    }
    async updateUsers(req, res){  // обновление данных о пользователе
        const {id, name, surname, email, password, number, role} = req.body // получаем данные из тела запроса
        // sql запрос к БД
        const user =  await db.query(`UPDATE person set name = $1, surname = $2, email = $3, password = $4, number = $5,
              role = $6 where id = $7 RETURNING *`, [name, surname, email, password, number, role, id])
        res.json(user.rows[0])

    }
    async deleteUsers(req, res){  // удаления пользователя
        const id = req.params.id // получаем из параметров запроса id
        const user =  await db.query(`DELETE from person where id = $1`, [id]) // получаем пользователя по id
        res.json(user.rows[0]) // возвращаем его на клиент

    }
}

module.exports = new UserController()