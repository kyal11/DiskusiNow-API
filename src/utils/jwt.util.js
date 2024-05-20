const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

class JWTUtils {
    static generateToken({ user }) {
        const token = jwt.sign({
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

    static generateRefreshToken({ user }) {
        const refreshToken = jwt.sign({
            email: user.email,
            name: user.name,
            nim: user.nim
        },
        process.env.JWT_REFRESH_SECRET,
        {
            expiresIn: "24h"
        });
        return refreshToken;
    }

    static verifyToken(token) {
        return jwt.verify(token, process.env.JWT_SECRET);
    }

}

module.exports = JWTUtils;
