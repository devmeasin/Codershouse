const userModel = require('../models/user-model')

class userService {

    // findUser from database
    findUser = async (filter) => {
        const user = await userModel.findOne(filter);
        return user;
    }

    // create new user
    createUser = async (data) => {
        const user = await userModel.create(data)
        return user;
    }

};


module.exports = new userService();