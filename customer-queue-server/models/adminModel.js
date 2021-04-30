const { ObjectId } = require('mongodb');
const { getDatabase } = require('../config/mongodb')

class Admin {
  static findOne(email) {
    return getDatabase().collection('Users').findOne({ email })
  }
  static insert(payload) {
    return getDatabase().collection('Users').insertOne(payload)
  }
}

module.exports = Admin
