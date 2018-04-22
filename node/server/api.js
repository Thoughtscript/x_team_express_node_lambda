'use strict'

const routes = require('./routes').api,
  data = require('../../data.json')

module.exports = {
  createApi: async (url, req, res) => {
    console.log(`${req.connection.remoteAddress} connected to API server!`)

    if (routes.indexOf(url) !== -1) {
      let reponseData

      if (url === routes[0]) {
        switch (req.method) {
          //READ ALL
          case ('GET'):
            reponseData = await data
            return res.write(JSON.stringify({status: 200, data: reponseData}))

          //DELETE
          case ('DELETE'):
            delete data[req.param.id]
            reponseData = await data
            return res.write(JSON.stringify({status: 200, data: reponseData}))

          //UPDATE
          case ('UPDATE'):
            data[req.param.contact.id] = req.param.contact
            reponseData = await data
            return res.write(JSON.stringify({status: 200, data: reponseData}))

          //CREATE
          case ('CREATE'):
            data[req.param.contact.id] = req.param.contact
            reponseData = await data
            return res.write(JSON.stringify({status: 200, data: reponseData}))

          //READ ALL
          default:
            reponseData = await data
            return res.write(JSON.stringify({status: 200, data: reponseData}))
        }

      } else if (url === routes[1]) {
        //GET ONE
        reponseData = await data[req.param.id]
        return res.write(JSON.stringify({status: 200, data: reponseData}))
      }
    }
  }
}