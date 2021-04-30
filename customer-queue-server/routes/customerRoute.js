const router = require('express').Router()
const CustomerController = require('../controllers/customerController')

// Middlewares
const authentication = require('../middlewares/authentication.js')
const authorized = require('../middlewares/authorized.js')

// Read List Customer
router.get('/', authentication, authorized, CustomerController.readCustomer)
// Add New Customer
router.post('/income', authentication, authorized, CustomerController.createCustomer)
// Find One List Customer by Product Id
router.get('/:id', authentication, authorized, CustomerController.getCustomerByProductId)

module.exports = router