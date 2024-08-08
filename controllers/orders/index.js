const getCurrentOrder = require('./getCurrentOrder');
const saveOrder = require('./saveOrder');
const confirmOrder = require('./confirmOrder');
const updateOrder = require('./updateOrder');
const { ctrlWrapper } = require('../../middlewares');

module.exports = {
    getCurrentOrder: ctrlWrapper(getCurrentOrder),
    saveOrder: ctrlWrapper(saveOrder),
    confirmOrder: ctrlWrapper(confirmOrder),
    updateOrder: ctrlWrapper(updateOrder)
}