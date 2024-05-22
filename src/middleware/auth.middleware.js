const jwt = require("../utils/jwt.util")

const authMiddleware = ((req, res, next) => {
    const token = req.header("Authorization").replace("Bearer ", '');

    if (!token) {
        res.status(401).json({
            status: false,
            message: "Unauthorized access !"
        })
    }
    try {

        if (jwt.isBlackListToken(token)) {
            res.status(401).json({
                status: false,
                message: "Token no longer has access"
            })
        }

        const decoded = jwt.verifyToken(token, process.env.JWT_SECRET);
        console.log("3")
        req.user = decoded;

        next()
    } catch (error) {
        res.status(401).json({status: false, message: "Unauthorized access" });
    }
});

module.exports = authMiddleware