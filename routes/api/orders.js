const express = require('express');
const {validation, authenticate, removeOwnerField} = require('../../middlewares');
const {JoiOrderSchema} = require('../../models');
const {confirmOrder, getCurrentOrder, saveOrder, updateOrder} = require('../../controllers/orders')

const router = express.Router();

router.post('/confirm', authenticate, removeOwnerField, validation(JoiOrderSchema), confirmOrder);
router.get('/:id', authenticate, getCurrentOrder);
router.post('/save', authenticate, validation(JoiOrderSchema), saveOrder);
router.put('/:id', authenticate, validation(JoiOrderSchema), updateOrder);

module.exports = router;