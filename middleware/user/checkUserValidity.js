const { userValidators } = require('../../validator')

module.exports = (req, res, next)=>{
  try{
        const user = req.body;

        userValidators.newUserValidity(user);

        next()
  }catch (e) {
        res.json('error1')
  }

}