const mongoose = require('mongoose')
const shortId = require('shortid')
// const config = require('config')

// const baseUrl = config.get('baseUrl');

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate
    // default: baseUrl + '/' + shortId.generate
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)