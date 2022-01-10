const crypto = require('crypto');
const { HASH_SECRET } = require('../config')

class hashService {

    hashOtp = async (data) => {
        return crypto.createHmac('sha256', HASH_SECRET).update(data).digest('hex');
    }

}

module.exports = new hashService();