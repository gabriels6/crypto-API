const jwt = require('jsonwebtoken');

module.exports = {
    signToken(UserId){

        const token = jwt.sign({id:UserId}, process.env.SECRET, {
            expiresIn: "24h"
        });

        return token;
    }
}