const { countUser , getUsers} = require('./userController');
const router = require("express").Router();

router.get('/login', countUser);
router.get('/', getUsers);

module.exports = router;