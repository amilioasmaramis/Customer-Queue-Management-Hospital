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
        nama, 
        umur, 
        jenisKelamin, 
        pekerjaan,
        namaIbu, 
        kota, 
        agama, 
        golDarah, 
        noKtp, 
        tujuanPasien
      } = req.body
      if (!nama || !umur || !jenisKelamin || !pekerjaan || !kota || !namaIbu || !agama || !golDarah || !noKtp || !tujuanPasien ) throw { name: 'error_400_body_invalid' }
      const dataCustomer = await Customer.createCustomer({
        nama, 
        umur, 
        jenisKelamin, 
        pekerjaan,
        namaIbu, 
        kota, 
        agama, 
        golDarah, 
        noKtp, 
        tanggalDaftar: new Date(),
        tujuanPasien,
        status: false,
      })
      res.status(201).json(dataCustomer.ops[0])
    } catch(err) {
      next(err)
    }
  }
  // Update Status Customer, ketika sudah ditangani, status jadi true(sudah ditangani)
  static async updateStatusIsServed(req, res, next) {
    try {
      const updateCustomer = await Customer.updateStatusIsServed({
        _id: req.params._id,
        status: true
      })
      console.log(updateCustomer)
      res.status(200).json({
        message: "Update Customer is Served successfully"
      })
    } catch(err) {
      next(err)
    }
  }
}

module.exports = CustomerController
