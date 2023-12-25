const mongoose = require('mongoose')

const newLoginSchema = require('../schema/schema')


const collection = new mongoose.model('parent', newLoginSchema)

module.exports = collection;