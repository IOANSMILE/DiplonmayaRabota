const path = require("path");
class basketController  { // класс будет определять что может наше приложение
    async basketView(req, res){  // метод создания пользователя
        res.sendFile(path.join(__dirname,'../view/basket.html' ))
    }
}

module.exports = new basketController()