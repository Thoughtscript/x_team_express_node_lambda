'use strict'

const routes = require('./routes').api,
  data = require('../../data.json')

module.exports = {
  createApi: async (url, req, res) => {
    //console.log(`${req.connection.remoteAddress} connected to API!`)

    if (routes.indexOf(url) !== -1) {
      let reponseData
      res.setHeader('Content-type', 'application/json')

      if (url === routes[0]) {
        switch (req.method) {
          //READ ALL
          case ('GET'):
            reponseData = await data
            res.write(JSON.stringify({status: 200, data: reponseData}))
            break

          //DELETE
          case ('DELETE'):
            delete data[req.param.id]
            reponseData = await data
            res.write(JSON.stringify({status: 200, data: reponseData}))
            break

          //UPDATE
          case ('UPDATE'):
            data[req.param.contact.id] = req.param.contact
            reponseData = await data
            res.write(JSON.stringify({status: 200, data: reponseData}))
            break

          //CREATE
          case ('CREATE'):
            data[req.param.contact.id] = req.param.contact
            reponseData = await data
            res.write(JSON.stringify({status: 200, data: reponseData}))
            break

          //READ ALL
          default:
            reponseData = await data
            res.write(JSON.stringify({status: 200, data: reponseData}))
            break
        }

      } else if (url === routes[1]) {
        //GET ONE
        reponseData = await data[req.param.id]
        res.write(JSON.stringify({status: 200, data: reponseData}))
      }
      res.statusCode = 200
      res.end()
    }
  }
}