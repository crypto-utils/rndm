
var assert = require('assert')

var rndm = require('..')

it('should work', function () {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var random = rndm.create(characters)
  var i = 1000
  while (i--) {
    var str = random(10)
    for (var j = 0; j < 10; j++) {
      assert(~characters.indexOf(str[j]))
    }
  }
})

it('should be base62 by default', function () {
  assert(/^[0-9a-z]{100}$/i.test(rndm(100)))
  assert(/^[0-9a-z]{100}$/i.test(rndm.base62(100)))
})
