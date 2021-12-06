const path = require("path");
class AuthController { // класс будет определять что может наше приложение
    async AuthView(req, res){  // метод создания пользователя
        res.sendFile(path.join(__dirname,'../view/auth.html' ))
    }
}

module.exports = new AuthController()