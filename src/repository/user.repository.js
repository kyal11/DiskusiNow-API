const { User } = require("../../models");
const bcrypt = require("bcrypt")

class UserRepository {
    async getAllUsers() {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            throw error;
        }
    }

    async getUserById(id) {
        try {
            const user = await User.findByPk(id);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getUserByEmail(email) {
        try {
            const user = await User.findOne({
                where: {
                    email
                }
            });
            return user;
        } catch (error) {
            throw error;
        }
    }
    async createUser(userData) {
        try {
            const hashPassword = await bcrypt.hash(userData.password, 10)
            const user = await User.create({ ...userData, password: hashPassword})
            return user
        } catch (error) {
            throw error
        }
    }

    async updateUser(id, userData) {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error('User not found');
            }
            await user.update(userData);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(id) {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error('User not found');
            }
            await user.destroy();
            return true; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserRepository();
