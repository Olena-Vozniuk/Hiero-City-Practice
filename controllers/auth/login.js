const {User} = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {HttpError} = require('../../helpers');

const {SECRET_KEY} = process.env;


if (!SECRET_KEY) {
    throw new Error('SECRET_KEY is not defined');
}

const login = async(req, res, next) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    const passCompare = bcrypt.compareSync(password, user.password);
    
    if(!user || !passCompare){
        next(HttpError(401, 'Email or password is wrong'));
    }
    
    const payload = {
        id: user._id,
    };

    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: '24h'});
    
    await User.findByIdAndUpdate(user._id, {token});

    res.json({
        status: 'success',
        code: 200,
        data: {
            token
        }
    })
};


module.exports = login;