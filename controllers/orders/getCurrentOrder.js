const {Order} = require('../../models');
const { HttpError } = require('../../helpers');

const getCurrentOrder = async (req, res, next) => {
    try {
        const { id: orderId } = req.params;
        
        if (!orderId) {
            throw HttpError(400, 'Order ID is required');
        }
        
        const order = await Order.findById(orderId);

        if (!order) {
            throw HttpError(404, 'Order not found');
        }
        
        res.json(order);
    } catch (error) {
        next(error); 
    }
};

module.exports = getCurrentOrder;