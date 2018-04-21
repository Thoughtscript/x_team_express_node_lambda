'use strict'

/**
 * Express server with security, api's, custom logging, etc.
 */

const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  c = config('../config.js')

module.exports = {
  createServer: () => {

    app.set('views', path.join(__dirname, '../..', c.public))
      .engine('html', require('ejs').renderFile)
      .set('view engine', 'html')

      .use(require('morgan')('dev'))
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({extended: true}))
      .use(require('cookie-parser')())

      .use('/', require('./viewcontroller'))
      .use('/api', require('./api'))

    const listener = app.listen(c.expressPort, err => {
      if (err) console.error(err)
      else console.log(`Express server listening on port ${listener.address().port}`)
    })

    return app
  }
}
