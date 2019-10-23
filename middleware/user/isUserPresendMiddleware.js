const dataBase = require('../../dataBase').getInstance();

module.exports  = async (req, res, next) => {
    try{
        const { user_id }  = req.params;
        const UserModel = dataBase.getModels('User');
        let isUserPresent = await  UserModel.findByPk(user_id);

        if(!isUserPresent){
            throw new Error(`user with ${user_id} is not present`);
        }

        req.user= isUserPresent;
        next();
    }catch (e) {
        res.json('You have problems')
    }

}