const otpService = require('../services/otp-service');
const hashService = require('../services/hash-service');
const userService = require('../services/user-service');
const tokenService = require('../services/token-service');
const UserDto = require('../dtos/user-dtos');

class authController {

    // sendOtp method 
    sendOtp = async (req, res) => {

        const { phone } = req.body;

        if (!phone) {
            res
                .status(400)
                .json({ "message": "Phone Number Required!" })
        }

        const otp = await otpService.generateOtp();

        // Hash
        const ttl = 1000 * 60 * 2;
        const expires = Date.now() + ttl;

        const data = `${phone}.${otp}.${expires}`;

        const hash = await hashService.hashOtp(data);

        try {

            // await otpService.senBySms(phone, otp);

            res.json({ hash: `${hash}.${expires}`, phone, otp });

        } catch (err) {
            console.log(err.message);
        }

    }

    // verifyOtp method 
    verifyOtp = async (req, res) => {

        const { hash, phone, otp } = req.body;

       // check all data in req body here
        if (!hash || !phone || !otp) {
            res.status(400).json({ message: "All flied are required" });
        }

        const [hashOtp, expires] = hash.split('.');

        // check expire or not expire otp here
        if (Date.now() > +expires) {
            res.status(400).json({ message: "OTP Time Expired" });
        }


        const data = `${phone}.${otp}.${expires}`;


        const isValid = await otpService.verifyOtp(hashOtp, data);

        if (!isValid) {
            res.status(400).json({ message: "Invalid OTP!" });
        }

        let user;

        try {
            user = await userService.findUser({ phone });
            if (!user) {
                user = await userService.createUser({ phone });
            }

        } catch (error) {
            res.status(500).json({ message: "User not Created", error });
        }


        // generate token call here 
        const { accessToken, refreshToken } = tokenService.generateToken({ id: user._id });

        // refreshToken Save to Database
        await tokenService.storeRefreshToken(refreshToken, user._id)

        res.cookie('accessToken', accessToken, {
            maxAge: 1000 * 60 * 60,
            httpOnly: true
        });
        res.cookie('refreshToken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true
        });

        const userDto = new UserDto(user);

        res.status(200).json({ user: userDto, accessToken });

    }
}

module.exports = new authController();