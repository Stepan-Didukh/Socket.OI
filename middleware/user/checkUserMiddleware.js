const dataBase = require('../../dataBase').getInstance();

module.exports = async ( req, res, next) => {
    try {
        const { email, name, password } = req.body;

        const UserModel = dataBase.getModels('User');
        let checkLoginUser = await UserModel.findOne({
            where: {
                email,
                name,
                password
            }
        });
        if (!checkLoginUser){
            throw new Error(`Incorrect values`);
        }

        req.user = checkLoginUser;
        next();

    } catch (e) {

        res.status(400).json(e.message);

    }
};