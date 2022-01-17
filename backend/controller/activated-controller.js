const Jimp = require('jimp');
const path = require('path');
const userService = require('../services/user-service');
const UserDto = require('../dtos/user-dtos');


class ActivatedController {

    activate = async (req, res) => {

        // check data in req body
        const { name, avatar } = req.body;

        try {
            if (!name || !avatar) {
                throw new Error('All field are Required')
            }

        } catch (err) {
            res.status(400).json({ message: err.message });
        }

        // convert image base64 buffer node js  
        const buffer = Buffer.from(avatar.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''), 'base64');

        const imgPath = `${Date.now()}-${Math.random(Math.random() * 1e9)}.png`;

        // image resize and compress here and store file system
        try {

            const jimpRes = await Jimp.read(buffer);
            jimpRes.resize(150, Jimp.AUTO).write(path.resolve(__dirname, `../storage/image/${imgPath}`));

        } catch (err) {
            res.status(400).json({ message: `image Can't proccess ${err.message}` });
        }


        // user update here and save extra info database. 

        try {

            const { id } = req.user;

            const user = await userService.findUser({ _id: id });

            if (!user) {
                throw new Error('User not found');
            }
            user.activated = true;
            user.name = name;
            user.avatar = `/storage/image/${imgPath}`;

            user.save();

            res.status(200).json({ user: new UserDto(user), auth: true });

        } catch (err) {

            res.status(400).json({ message: `User Not Update in Database ${err.message}` })
        }



    }
}

module.exports = new ActivatedController();