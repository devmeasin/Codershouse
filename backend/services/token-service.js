const jwt = require('jsonwebtoken');
const { accessTokenSecret, refreshTokenSecret } = require('../config');
const RefreshModel = require('../models/refresh-model');

class tokenService {

    // generateToken here
    generateToken = (payload) => {

        const accessToken = jwt.sign(payload, accessTokenSecret, {
            expiresIn: '1h'
        });
        const refreshToken = jwt.sign(payload, refreshTokenSecret, {
            expiresIn: '1y'
        });

        return { accessToken, refreshToken };
    }

    // store refreshToken in Database
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


    //Verify Access Token Here

    verifyAccessToken = async (token) => {
        return jwt.verify(token, accessTokenSecret);
    }

}


module.exports = new tokenService();