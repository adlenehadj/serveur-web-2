const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const { createUser,updateUser } = require('../validators/user.validator')
const {id} = require('../validators/common.validator')

// User
router.get('/', UserController.getAll); // Done
router.get('/:id', id, UserController.getByPk); //Done
router.post('/', createUser, UserController.createUser); //Done
router.patch('/:id',id,updateUser, UserController.updateUser); //Done
router.delete('/:id',id,UserController.deleteUser); //Done

module.exports = router;
