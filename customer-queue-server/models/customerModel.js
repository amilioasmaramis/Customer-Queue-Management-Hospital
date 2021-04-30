const { ObjectId } = require('mongodb')
const { getDatabase } = require('../config/mongodb')

class Customer {
  // Read Budget Data
  static readCustomer(id) {
    return getDatabase().collection('Customers').find({ UserId: id.UserId }).sort({"createdAt": -1}).toArray()
  } 
  // Create budget income
  static createCustomer(budget) {
    return getDatabase().collection('Customers').insertOne(budget)
  }
  // Get Customer By Product Id
  static getCustomerByProductId(_id) {
    return getDatabase().collection('Customers').findOne({ ProductId: ObjectId(_id)})
  }

}

module.exports = Customer