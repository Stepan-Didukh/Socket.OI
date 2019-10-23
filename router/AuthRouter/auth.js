const router = require('express').Router();

const {user, house: houseController} = require('../../constrollers');
const { user: UserMiddleware, houseMiddleware} = require('../../middleware');

router.get('/', (req,res) => { res.render('login') });


router.post('/',UserMiddleware.checkUserMiddleware, user.login);


module.exports = router;