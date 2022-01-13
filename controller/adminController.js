const path = require("path");
const checkAuth = require('../models/checkAuth')
class AdminController {
    async admin (req, res){
        let user;
        try {
            user = await checkAuth.checkAuth(req)
        } catch (e){
            res.status(403)
            res.send('not_access')
            return
        }
        res.sendFile(path.join(__dirname, '../view/secretFile.html'))
    }
}

module.exports = new AdminController()
