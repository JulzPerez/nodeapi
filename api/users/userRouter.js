const { getUsers, addNewUser,verifyUser} = require('./userController');
const router = require("express").Router();

router.get('/login', verifyUser);
router.get('/', getUsers);
router.post('/', addNewUser);

module.exports = router;