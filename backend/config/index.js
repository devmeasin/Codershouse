require('dotenv').config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;        
const BaseUrl = process.env.BaseUrl;        

const HASH_SECRET = process.env.HASH_SECRET;
const SMS_SID = process.env.SMS_SID;
const SMS_AUTH_TOKEN = process.env.SMS_AUTH_TOKEN;
const SMS_PHONE_NUMBER = process.env.SMS_PHONE_NUMBER;
const accessTokenSecret = process.env.accessTokenSecret;
const refreshTokenSecret = process.env.refreshTokenSecret;

const config = {
    PORT,
    DB_URL,
    BaseUrl,
    HASH_SECRET,
    SMS_SID,
    SMS_AUTH_TOKEN,
    SMS_PHONE_NUMBER,
    accessTokenSecret,
    refreshTokenSecret

}

module.exports = config;