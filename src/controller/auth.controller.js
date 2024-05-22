const AuthService = require("../service/auth.service")

class AuthController {
    async register(req, res) {
        try {
            const userData = req.body;
            const newUser = await AuthService.register(userData)
            const respondUserData = {
                name: newUser.name,
                email: newUser.email,
                nim: newUser.nim,
                createdAt: newUser.createdAt
            };
            res.status(201).json({
                status: true,
                message: "Register successful",
                data: respondUserData
            })
        } catch (error) {
            res.status(400).json({status: false, message: error.message})
        }

    }
    async login(req, res) {
        try {
            const {email, password} = req.body;
            const result = await AuthService.login(email, password);

            res.status(200).json({
                status: true,
                message: "Login successful",
                token: result.token
            })
        } catch (error) {
            res.status(400).json({status: false, message: error.message})
        }
        
    }
    async logout(req, res) {
        try {
            const token = req.header('Authorization').replace('Bearer ', '');
            const result = await AuthService.logout(token);
            res.status(200).json({status: false, message: result});
        } catch (error) {
            res.status(400).json({status: false, message: error.message})
        }
    }
}

module.exports = new AuthController();