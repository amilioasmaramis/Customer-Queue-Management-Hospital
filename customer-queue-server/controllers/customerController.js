const Customer = require('../models/customerModel')

class CustomerController {
  // Read All Customer
  static async readCustomer(req, res, next) {
    try {
      const dataCustomer = await Customer.readCustomer()
      res.status(200).json({ dataCustomer })
    } catch(err) {
      next(err)
    }
  }
  // Create New Customer
  static async createCustomer(req, res, next) {
    try {
      const { 
        name, 
        umur, 
        jenisKelamin, 
        pekerjaan, 
        kota, 
        agama, 
        GolDarah, 
        noKtp, 
        pekerjaan, 
        tanggalDaftar
      } = req.body
      const dataCustomer = await Customer.createCustomer({
        name, 
        umur, 
        jenisKelamin, 
        pekerjaan, 
        kota, 
        agama, 
        GolDarah, 
        noKtp, 
        pekerjaan, 
        tanggalDaftar
      })
      res.status(201).json({dataCustomer})
    } catch(err) {
      next(err)
    }
  }
  // Get Customer By Product Id
  static async getCustomerByProductId(req, res, next) {
    try {
      const dataCustomerByProductId = await Customer.findOne({
        ProductId: req.params.id
      })
      res.status(200).json({ dataCustomerByProductId })
    } catch(err) {
      next(err)
    }
  }
  // Update Status Customer, ketika sudah ditangani, status jadi true(sudah ditangani)
}

module.exports = CustomerController
