const router = require('express').Router();

const {user} = require('../../constrollers');
const { user: UserMiddleware} = require('../../middleware');


router.get('/', (req,res) => { res.render('register') });
router.get('/editUsers', (req,res)=>{ res.render('editUser') });

router.post('/register', UserMiddleware.checkUserValidity, user.createUser);
router.post('/editUsers', UserMiddleware.checkUserEditMiddleware, user.editUser);
router.get('/:user_id',UserMiddleware.isUserPresentMiddleware, user.getById);

module.exports = router;