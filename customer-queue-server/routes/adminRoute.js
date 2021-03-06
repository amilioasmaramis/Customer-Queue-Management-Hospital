const router = require('express').Router()
const AdminController = require('../controllers/adminController.js')

router.post('/register', AdminController.register)
router.post('/login', AdminController.login)

module.exports = router