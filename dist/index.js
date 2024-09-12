
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./bq-react-lib.cjs.production.min.js')
} else {
  module.exports = require('./bq-react-lib.cjs.development.js')
}
