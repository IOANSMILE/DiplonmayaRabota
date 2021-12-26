const path = require("path");
class registrationController  { // класс будет определять что может наше приложение
    async registrationView(req, res){  // метод создания пользователя
        res.sendFile(path.join(__dirname,'../view/registration.html' ))
    }
}

module.exports = new registrationController()