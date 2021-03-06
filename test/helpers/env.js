
'use strict'

const path = require('path')
const env = require('good-env')
let appName, url

try {
  require('dotenv').config({ path: path.resolve('./test/test.env') })
} catch (e) { }

appName = env.get('APP_NAME', 'dionne')
url = env.get('DATABASE_URL', `postgresql://localhost:5432/${appName}`)

module.exports = {
  appName,
  url
}
