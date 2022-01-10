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
        const {title, razmer, gender, content, price, user_id} = req.body
        const newPost = await db.query(`INSERT INTO post (img, title, razmer, gender, content, price, user_id) 
            values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [img, title, razmer, gender, content, price, user_id])
        res.json(newPost.rows[0])
    }
    async getPost (req, res){ // получение всех постов
        const post =  await db.query(`select * from post`) // запрос к БД на получение всех пользователей
        res.json(post.rows)
    }

    async getPostByUser(req, res) { // получение конкретного поста
        const id = req.params.id
        const posts = await db.query(`select * from post where id = $1`, [id])
        res.json(posts.rows)
    }



    async updatePost(req, res){  // обновление данных о пользователе
        const {id, title, razmer, gender, content, price, user_id} = req.body // получаем данные из тела запроса
        // sql запрос к БД
        const posts =  await db.query(`UPDATE post set title = $1, razmer = $2, gender = $3, content = $4, price = $5,
             user_id = $6 where id = $7 RETURNING *`, [title, razmer, gender, content, price, user_id, id])
        res.json(posts.rows[0])

    }
    async deletePost(req, res){  // удаления пользователя
        const id = req.params.id // получаем из параметров запроса id
        const posts =  await db.query(`DELETE from post where id = $1`, [id]) // получаем пользователя по id
        res.json(posts.rows[0]) // возвращаем его на клиент

    }
}


module.exports = new PostController()