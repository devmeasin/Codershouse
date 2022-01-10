const jwt = require('jsonwebtoken');
const { accessTokenSecret, refreshTokenSecret } = require('../config');
const RefreshModel = require('../models/refresh-model');

class tokenService {

    generateToken = (payload) => {

        const accessToken = jwt.sign(payload, accessTokenSecret, {
            expiresIn: '1h'
        });
        const refreshToken = jwt.sign(payload, refreshTokenSecret, {
            expiresIn: '1y'
        });

        return { accessToken, refreshToken };
    }

    storeRefreshToken = async (token, userId) => {
        try {
            await RefreshModel.create({
                token,
                userId
            });

        } catch (err) {
            console.log(err);
        }
    }

}


module.exports = new tokenService();