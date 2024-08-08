const { Order } = require('../../models');
const { HttpError } = require('../../helpers');

const updateOrder = async (req, res) => {
    try {
        const order = await Order.findOneAndUpdate({ _id: req.params.id, owner: req.user._id }, req.body, { new: true, runValidators: true });
        if (!order) {
            throw new HttpError(404);
        }
        res.status(200).send(order);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = updateOrder;