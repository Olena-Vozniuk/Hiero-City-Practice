const bcrypt = require('bcryptjs');
const {User} = require('../../models/User');
const {HttpError, handleMongooseError} = require('../../helpers');

const register =  async (req, res) => {
    try {
        const {name, email, password} = req.body;
   
        const user = await User.findOne({email});
    
        if(user){
            throw HttpError(409, `User with email ${email} already exist`)
        }
    
        const hashPassword =  bcrypt.hashSync(password, 10);
        const newUser = await User.create({
            name, email, password: hashPassword
        });
    
        res.status(201).json({
            status: 'success',
            code: 201,
            user: {
                    email: newUser.email,
                    name: newUser.name,
                }       
        }) 
    } catch (error) {
        handleMongooseError(error, req.body, next);
    }
};

module.exports = register;