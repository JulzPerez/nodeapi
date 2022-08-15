const { getUserProfile , getUsers} = require('./userController');
const router = require("express").Router();

router.get('/login', getUserProfile);
router.get('/', getUsers);

module.exports = router;