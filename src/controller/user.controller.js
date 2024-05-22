const userRepository = require("../repository/user.repository");

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await userRepository.getAllUsers();
            const filterDataUser = users.map(user => {
                const { password, ...filterDataUser } = user.dataValues;
                return filterDataUser;
            });
            res.status(200).json({
                status: true,
                message: "Users retrieved successfully",
                data: filterDataUser
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
            });
        }
    }

    async getUserById(req, res) {
        const id = req.params.id;

        try {
            const user = await userRepository.getUserById(id);
        
            if (!user) {
                return res.status(404).json({
                    status: false,
                    message: "User not found!"
                });
            }

            res.status(200).json({
                status: true,
                message: "User found",
                data: user
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
            });
        }
    }
    async getUserByEmail(req, res) {
        const email = req.params.email;

        try {
            const user = await userRepository.getUserByEmail(email);

            if (!user) {
                return res.status(401).json({
                    status: false,
                    message: "User not found!"
                });
            }

            res.status(200).json({
                status: true,
                message: "User found",
                data: {
                    name: user.name,
                    email: user.email,
                    nim: user.nim,
                }
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
            });
        }
    }
    async createUser(req, res) {
        const userData = req.body;

        try {
            const existingUser = await userRepository.getUserByEmail(userData.email);
            if (existingUser) {
                throw new Error('Email already exists');
            }
            const newUser = await userRepository.createUser(userData);


            res.status(201).json({
                status: true,
                message: "User created successfully",
                data: {
                    name: newUser.name,
                    email: newUser.email,
                    nim: newUser.nim,
                    createdAt: newUser.createdAt,
                    updatedAt: newUser.updatedAt
                }
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
            });
        }
    }

    async updateUser(req, res) {
        const id = req.params.id;
        const userData = req.body;

        try {
            const updatedUser = await userRepository.updateUser(id, userData);

            res.status(200).json({
                status: true,
                message: "User updated successfully",
                data: {
                    name: updatedUser.name,
                    email: updatedUser.email,
                    nim: updatedUser.nim,
                    createdAt: updatedUser.createdAt,
                    updatedAt: updatedUser.updatedAt
                }
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
            });
        }
    }

    async deleteUser(req, res) {
        const id = req.params.id;

        try {
            await userRepository.deleteUser(id);

            res.status(200).json({
                status: true,
                message: "User deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
            });
        }
    }
}

module.exports = new UserController();
