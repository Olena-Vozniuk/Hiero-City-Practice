const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const orderSchema = new mongoose.Schema({
    besteller: String,
    niederlassung: String,
    mitarbeiter: String,
    imagebroschuereInclPraesentationsmappen: String,
    imagebroschuerenOhnePraesentationsmappe: String,
    praesentationsmappe: String,
    checklisteFuerLead: String,
    visitenkarten250: String,
    nameVisitenkarten250: String,
    visitenkarten500: String,
    nameVisitenkarten500: String,
    briefpapier500: String,
    nlBriefpapier500: String,
    briefpapier1000: String,
    nlBriefpapier1000: String,
    poloHemdHerrenAptStickGrSXXL: String,
    lagerbestandPoloHemdSXXL: String,
    lieferungSobaldVerfuegbar: { type: Boolean, default: false },
    sofortLiefernMitAufpreis: { type: Boolean, default: false },
    mindestmenge20Bestellen: { type: Boolean, default: false },
    groessePoloHemdSXXL: String,
    poloHemdHerrenAptStickGrXXXL: String,
    groessePoloHemdXXXL: String,
    status: { type: String, enum: ['draft', 'confirmed'], default: 'draft' },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
},
{versionKey: false, 
timestamps: true});

//Order Joi Schema

const JoiOrderSchema = Joi.object({
    besteller: Joi.string().allow(''),
    niederlassung: Joi.string().allow(''),
    mitarbeiter: Joi.string().allow(''),
    imagebroschuereInclPraesentationsmappen: Joi.string().allow(''),
    imagebroschuerenOhnePraesentationsmappe: Joi.string().allow(''),
    praesentationsmappe: Joi.string().allow(''),
    checklisteFuerLead: Joi.string().allow(''),
    visitenkarten250: Joi.string().allow(''),
    nameVisitenkarten250: Joi.string().allow(''),
    visitenkarten500: Joi.string().allow(''),
    nameVisitenkarten500: Joi.string().allow(''),
    briefpapier500: Joi.string().allow(''),
    nlBriefpapier500: Joi.string().allow(''),
    briefpapier1000: Joi.string().allow(''),
    nlBriefpapier1000: Joi.string().allow(''),
    poloHemdHerrenAptStickGrSXXL: Joi.string().allow(''),
    lagerbestandPoloHemdSXXL: Joi.string().allow(''),
    lieferungSobaldVerfuegbar: Joi.boolean(),
    sofortLiefernMitAufpreis: Joi.boolean(),
    mindestmenge20Bestellen: Joi.boolean(),
    groessePoloHemdSXXL: Joi.string().allow(''),
    poloHemdHerrenAptStickGrXXXL: Joi.string().allow(''),
    groessePoloHemdXXXL: Joi.string().allow(''),
    status: Joi.string().valid('draft', 'confirmed'),
    //owner: Joi.objectId().required()
});


const Order = mongoose.model('order', orderSchema);

module.exports = {
    Order,
    JoiOrderSchema
}

