const db = require('../dbPG.js')
class PostController {
//todo: переписать в MVC
    async createPost(req, res) { // создание поста
        const file = req.file
        console.log(req.file)
        if (!file) {
            const error = new Error('Please upload a file')
            error.httpStatusCode = 400
            res.json('ошибка')
            return
        }
        const img = `http://localhost:5000/upload/${file.originalname}`
        const {title, razmer, content, price, user_id} = req.body
        const newPost = await db.query(`INSERT INTO post (img, title, razmer, content, price, user_id) 
            values ($1, $2, $3, $4, $5, $6) RETURNING *`, [img, title, razmer, content, price, user_id])
        res.json(newPost.rows[0])
    }

    async getPostByUser(req, res) { // получение конкретного поста
        const id = req.query.id
        const posts = await db.query(`select * from post where id = $1`, [id])
        res.json(posts.rows)

    }

    // async updatePost(req, res){  // обновление данных о пользователе
    //     const {id,name, surname, email, number, role} = req.body // получаем данные из тела запроса
    //     // sql запрос к БД
    //     const user =  await db.query(`UPDATE person set name = $1, surname = $2, email = $3, number = $4, role = $5
    //          where id = $6 RETURNING *`, [name, surname, email, number, role, id])
    //     res.json(user.rows[0])
    //
    // }
}

module.exports = new PostController()