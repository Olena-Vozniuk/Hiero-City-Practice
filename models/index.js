const { User, joiRegisterSchema, joiLoginSchema} = require('./User');
const { Order, JoiOrderSchema} = require('./Order');

module.exports = {
    User,
    joiRegisterSchema,
    joiLoginSchema,
    Order,
    JoiOrderSchema
};