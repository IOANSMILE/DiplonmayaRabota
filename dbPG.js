const Pool = require('pg').Pool // получаем базу данных
const pool = new Pool({ // создание объекта класса
    user: "postgres",
    password: "696084",
    host: "localhost",
    port: 5432,
    database: "clothes_DB_chest"
})

module.exports = pool // экспорт объекта

// 'clothes_magazin'