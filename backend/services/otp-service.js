const crypto = require('crypto');
const hashService = require('../services/hash-service');
const { SMS_SID, SMS_AUTH_TOKEN, SMS_PHONE_NUMBER } = require('../config');

const twilio = require('twilio')(SMS_SID, SMS_AUTH_TOKEN, { lazyLoading: true });

class otpServices {

    // generateOtp
    generateOtp = async () => {
        return crypto.randomInt(1000, 9999);
    }

    // senBySms
    senBySms = async (phone, otp) => {
        return await twilio.messages.create({
            to: phone,
            from: SMS_PHONE_NUMBER,
            body: `Coder's House Your OTP Code is - ${otp}`
        })
    }

    // verifyOtp
    verifyOtp = async (hashOtp, data) => {

        const computedHash = await hashService.hashOtp(data);
        return hashOtp === computedHash;
    }

}

module.exports = new otpServices();