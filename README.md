
# RNDM

Random string generator.
Basically `Math.random().toString(36).slice(2)`,
but with both upper and lower case letters and arbitrary lengths.
Useful for creating fast, not cryptographically secure salts.

## API

```js
// base62 by default
var rndm = require('rndm')
var salt = rndm(16)
```

### var salt = rndm(length)

Same as rndm.base62(length), Creates a random string contains numbers and both upper and lower case letters (0-9, a-z, A-Z). Default length is 10.

### var salt = rndm.base62(length)

Creates a random string contains numbers and both upper and lower case letters (0-9, a-z, A-Z). Default length is 10.

### var salt = rndm.base36(length)

Creates a random string contains numbers and lower case letters (0-9, a-z). Default length is 10.

### var salt = rndm.base10(length)

Creates a random string contains numbers only (0-9). Default length is 10.

### var random = rndm.create(characters)

Creates a new random generator with custom characters.

## Examples

```js
var salt = rndm(16) // salt = 'QRI2x6gckpHi5wrO'
var salt = rndm.base62() // salt = 'mtInqvjD8N'
var salt = rndm.base36(5) // salt = 'lpksf'
var salt = rndm.base10(9) // salt = '974457528'
var salt = rndm.create('ab12+-')() // salt = '2-11b-b1b-'
```