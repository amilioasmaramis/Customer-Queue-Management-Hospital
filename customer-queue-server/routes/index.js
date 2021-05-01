const router = require('express').Router()
const AdminRoute = require('./adminRoute')
const CustomerRoute = require('./customerRoute')

router.use('/users', AdminRoute)
router.use('/customers', CustomerRoute)

module.exports = router