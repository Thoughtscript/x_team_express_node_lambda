'use strict'

const mimeTypeMap = {
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
  mimeTypes = Object.keys(mimeTypeMap),
  mimeTypeCheck = '(' + mimeTypes.join('|').replace(/\./g, '\\.') + '){1}$'

const fs = require('fs'),
  c = require('../config'),
  path = require('path'),
  routes = require('./routes').views

module.exports = {
  createViewController: (url, req, res) => {
    //console.log(`${req.connection.remoteAddress} connected to HTTP server!`)
    const m = url.match(mimeTypeCheck)
    if (url === routes[0] || url === routes[1]) {
      res.writeHead(200, {'Content-Type': 'text/html'})
      fs.createReadStream(path.join(__dirname, '..', c.public, 'index.html')).pipe(res)
    } else if (m !== null && m.length > 0) {
      try {
        const ext = path.extname(url)
        fs.readFile(path.join(__dirname, '..', c.public, url), (error, content) => {
          if (error) {
            res.statusCode = 500
            res.end()
          }
          res.writeHead(200, { 'Content-Type':  mimeTypeMap[ext] || 'text/plain' })
          res.end(content, 'utf-8')
        })
      } catch (ex) {
        res.statusCode = 500
        res.end()
      }
    }
  }
}