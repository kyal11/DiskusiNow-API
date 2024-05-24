const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

class JWTUtils {
    static tokenBlackList = [];

    static generateToken({ user }) {
        const token = jwt.sign({
            id: user.id,
            email: user.email,
            name: user.name,
            nim: user.nim
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "24h"
        });
        return token;
    }

    static verifyToken(token) {
        return jwt.verify(token, process.env.JWT_SECRET);
    }

    static addBlackListToken(token) {
        this.tokenBlackList.push(token);
    }

    static isBlackListToken(token) {
        return this.tokenBlackList.includes(token);
    }
}

module.exports = JWTUtils
