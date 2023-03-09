// Basic Lib Imports
const express = require("express");
const router = express.Router();

const {
    getUser,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser
} = require('../controllers/userController')


router.route('/').get(getUser)
router.route('/:id').get(getSingleUser)
router.route('/').post(createUser)
router.route('update/:id').put(deleteUser)
router.route('delete/:id').delete(deleteUser)

module.exports = router;
