const tokenService = require('../services/token-service');

module.exports = async (req, res, next) => {

    try {

        const { accessToken } = req.cookies;

        if (!accessToken) {
            throw new Error('Access token Missing');
        }

        const userData = await tokenService.verifyAccessToken(accessToken);

        if (!userData) {
            throw new Error('Missing User Info');
        }

        req.user = userData;
        next();

    } catch (err) {
        res.status(401).json({ message: `Invalid Access Token ${err.message}` });
    }

}