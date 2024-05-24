const UserRepository = require("../repository/user.repository");
const JWTUtils = require("../utils/jwt.util");
const bcrypt = require("bcrypt");

class AuthService{
    async register(userData) {
        try {
            const existingUser = await UserRepository.getUserByEmail(userData.email);
            if (existingUser) {
                throw new Error('Email already exists');
            }

            const newUser = await UserRepository.createUser(userData);

            return newUser;
        } catch (error) {
            throw error;
        }
    }

    async login(email, password) {
        try {
            const user = await UserRepository.getUserByEmail(email);
            if (!user) {
                throw new Error('User not found');
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throw new Error('Invalid credentials');
            }
            const token = JWTUtils.generateToken({ user });

            return { user, token };
        } catch (error) {
            throw error;
        }
    }
    async logout(token) {
        try {
            JWTUtils.addBlackListToken(token);
            return { status: true,message: 'Logout successful' };
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new AuthService();

