const { ObjectId } = require('mongodb')
const { getDatabase } = require('../config/mongodb')

class Customer {
  // Read Budget Data
  static readCustomer(id) {
    return getDatabase().collection('Customers').find().sort({"tanggalDaftar": -1}).toArray()
  } 
  // Create budget income
  static createCustomer(payload) {
    return getDatabase().collection('Customers').insertOne(payload)
  }
  // Update Status Customer, ketika sudah ditangani, status jadi true(sudah ditangani)
  static updateStatusIsServed(payload) {
    const filterId = { _id: ObjectId(payload._id) }
    const updateData = {
      $set: {
        status: payload.status
      }
    }
    return getDatabase().collection('Customers').updateOne(filterId, updateData)
  }

}

module.exports = Customer