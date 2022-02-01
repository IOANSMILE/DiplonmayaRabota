const path = require("path");
const db = require("../dbPG");
class basketController  { // класс будет определять что может наше приложение
    async basketView(req, res){  // метод создания пользователя
        res.sendFile(path.join(__dirname,'../view/basket.html' ))
    }
    async payView(req, res){  // метод создания пользователя
        res.sendFile(path.join(__dirname,'../view/pay.html' ))
    }
}

module.exports = new basketController()