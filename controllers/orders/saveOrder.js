const { Order } = require('../../models');

const saveOrder = async (req, res, next) => {
    try {
        const existingOrder = await Order.findOne({ owner: req.user._id });
        if (existingOrder) {
            existingOrder.set({ ...req.body, status: 'draft' });
            await existingOrder.save();
            return res.status(200).send(existingOrder);
        }

        const order = new Order({ ...req.body, status: 'draft', owner: req.user._id });
        await order.save();
        res.status(201).send(order);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = saveOrder;