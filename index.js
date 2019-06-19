
var assert = require('assert')
var crypto = require('crypto')

var base62 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
var base36 = 'abcdefghijklmnopqrstuvwxyz0123456789'
var base10 = '0123456789'

exports = module.exports = create(base62)
exports.base62 = exports
exports.base36 = create(base36)
exports.base10 = create(base10)

exports.create = create

function create(chars) {
  assert(typeof chars === 'string', 'the list of characters must be a string!')
  var length = Buffer.byteLength(chars)
  return function rndm(len) {
    len = len || 10
    assert(typeof len === 'number' && len >= 0, 'the length of the random string must be a number!')
    var salt = ''
    for (var i = 0; i < len; i++) {
      var rndVal = (crypto.randomBytes(1).readIntBE(0,1) + 128) / 256;
      salt += chars[Math.floor(length * rndVal)]
    }
    return salt
  }
}
