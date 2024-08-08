const { Order } = require('../../models');
const {HttpError} = require('../../helpers');

const confirmOrder = async(req, res) => {
    try {
        //Überprüfung, ob der Benutzer existiert
        if (!req.user || !req.user._id) {
            throw HttpError(400, 'User not authenticated');
        }

        //Suchen nach einer bestehenden Bestellung
        const existingOrder = await Order.findOne({ owner: req.user._id });

        if (existingOrder) {
            existingOrder.set({ ...req.body, status: 'confirmed' });
            await existingOrder.save();
            return res.status(200).send(existingOrder);
        }

        //Erstellung einer neuer Bestellung
        const order = new Order({ ...req.body, status: 'confirmed', owner: req.user._id });
        await order.save();
        res.status(201).send(order);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = confirmOrder;