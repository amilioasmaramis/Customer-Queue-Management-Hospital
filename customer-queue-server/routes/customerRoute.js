const router = require('express').Router()
const CustomerController = require('../controllers/customerController')

// Middlewares
const authentication = require('../middlewares/authentication.js')
const authorized = require('../middlewares/authorized.js')

// Read List Customer
router.get('/', authentication, authorized, CustomerController.readCustomer)
// Add New Customer
router.post('/', authentication, authorized, CustomerController.createCustomer)
// Update Status Customer is Served, ketika sudah ditangani, status jadi true(sudah ditangani)
router.put('/:_id', authentication, authorized, CustomerController.updateStatusIsServed)


module.exports = router