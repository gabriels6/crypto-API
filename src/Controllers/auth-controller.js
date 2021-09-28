const {signToken} = require('../Utils/JWT/Create');

async function login(request,response){
    const {Username,Password} = request.body;

        if(Username !== process.env.JWT_USER || Password !== process.env.JWT_PASS) return response.status(500).send("User and/or password invalid/incorrect");

        const token = signToken(Username);
        
        return response.json({auth:true,token: token});
}

async function logout(request,response){
    return response.json({auth: false, token: null});
}

module.exports = {
    login,
    logout
}