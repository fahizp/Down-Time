const bcrypt=require('bcrypt');
var collection = require('../config/collection')
module.exports = {
    doLogin: (userData) => {
        return new Promise(async (resolve, reject) => {
            var data = collection.USER_COLLECTION

            if (data.email == userData.email) {
                bcrypt.compare(userData.password, data.password).then((loginTrue) => {
                    let response = {}
                    if (loginTrue) {
                        console.log('Login success');
                        response.user = data;
                        response.status = true;
                        resolve(response);
                    } else {
                        console.log('Login failed');
                        resolve({ status: false });
                    }
                })
            } else {
                console.log('Login failed1');
                resolve({ status: false });
            }
        })
    }
}