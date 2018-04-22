'use strict'

const fs = require('fs'),
  mimeType = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.eot': 'appliaction/vnd.ms-fontobject',
    '.ttf': 'aplication/font-sfnt'
  },
  c = require('../config'),
  path = require('path'),
  routes = require('./routes').views

module.exports = {
  createViewController: (url, req, res) => {
    console.log(`${req.connection.remoteAddress} connected to HTTPS server!`)

    if (url === routes[0] || routes.indexOf(url) === -1) {
      res.writeHead(200, {'Content-Type': 'text/html'})
      fs.createReadStream(path.join(__dirname, '..', c.public, 'index.html')).pipe(res)
    } else if (url.match(/^\/public\/(.)*/)) {
      fs.readFile('./' + url, function (err, data) {
        if (err) {

          res.statusCode = 500
          res.end(`Error getting the file: ${err}.`)

        } else {
          const ext = path.parse('./' + url).ext
          res.setHeader('Content-type', mimeType[ext] || 'text/plain')
          res.end(data)
        }

      })
    }
  }
}