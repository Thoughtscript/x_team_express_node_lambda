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
  routes = require('./routes').routes

module.exports = {
  createViewController: (url, req, res) => {
    console.log(`${req.connection.remoteAddress} connected to HTTPS server!`)

    if (routes.indexOf(url) !== -1) {
      res.writeHead(200, {'Content-Type': 'text/html'})
      fs.createReadStream('./publicBuilt/index.html').pipe(res)

    } else if (url.match(/^\/assets\/(.)*/)) {
      const filePath = './publicBuilt' + url
      console.log(filePath)
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.statusCode = 500
          const m = `Error getting the file ${filePath}: ${err}.`
          res.end(m)
          console.error(m)
        } else {
          const ext = (require('path')).parse(filePath).ext
          res.setHeader('Content-Type', mimeType[ext] || 'text/plain')
          res.end(data)
        }
      })
    }
  }
}