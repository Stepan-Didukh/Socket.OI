const dataBase  =  require('../../dataBase').getInstance();

module.exports = async (req,res)=>{
    try{
        const createUser = req.body;
        const UserModel = dataBase.getModels('User');

        await UserModel.create(createUser);

        res.render('login')
    } catch (e) {
        res.json(e.message)
    }

};