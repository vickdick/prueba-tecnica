const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {
    
    const {token} = req.headers;

    try{
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    }catch(err){
        return res.status(400).json({msg: err});
    }
    next();
}



module.exports = validarJWT;