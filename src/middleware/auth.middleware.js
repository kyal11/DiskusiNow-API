const jwt = require("../utils/jwt.util")

const authMiddleware = ((req, res, next) => {
    const authHeader = req.header("Authorization");


    if (!authHeader) {
        return res.status(401).json({
            status: false,
            message: "Authorization header is missing!"
        });
    }

    const token = authHeader.replace("Bearer ", '');
    if (!token) {
        return res.status(401).json({
            status: false,
            message: "Unauthorized access! Token is missing."
        });
    }
    try {

        if (jwt.isBlackListToken(token)) {
            res.status(401).json({
                status: false,
                message: "Token no longer has access"
            })
        }

        const decoded = jwt.verifyToken(token, process.env.JWT_SECRET);
        req.user = decoded;

        next()
    } catch (error) {
        res.status(401).json({status: false, message: "Unauthorized access" });
    }
});

module.exports = authMiddleware