const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const { user_id } = req.body;
        const dataToUpdate = req.body;
        const UserModel = dataBase.getModels('User');

        await UserModel.update(dataToUpdate, {
            where: {
                id: user_id
            }
        });
        res.redirect(`users/${user_id}`);

    } catch (e) {
        res.status(400).json(e.message);
    }
};