const removeOwnerField = (req, res, next) => {
    if (req.body.owner) {
        delete req.body.owner;
    }
    next();
};

module.exports = removeOwnerField;