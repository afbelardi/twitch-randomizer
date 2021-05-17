require('dotenv').config()
const request = require('request')
const secrets = require('./src/config')

const getToken = (url, callback) => {

    const options= {
        url: process.env.GET_TOKEN,
        json: true,
        body: {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: "client_credentials"
        }
    };

    request.post(options, (err, res, body) => {
        if(err){
            return console.error(err)
        }
        console.log(`Status: ${res.statusCode}`);
        console.log(body)

        callback(res);
    })
}


getToken(process.env.GET_TOKEN, (res) => {
    secrets.AT = res.body.access_token
    console.log(secrets.AT)
})




