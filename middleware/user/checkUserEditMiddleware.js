const { userValidators } = require('../../validator');

module.exports = (req, res, next) => {
    try {
        const user = req.body;

        userValidators.newUserEditValidator(user);
        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};