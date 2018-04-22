'use strict'

/**
 * Main view controller - for single page app.
 */

const express = require('express'),
  home = express.Router()

home.get('/', (req, res) => res.render('index.html'))

console.log(`Home view controller initialized`)

module.exports = home