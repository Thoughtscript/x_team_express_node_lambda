'use strict'

const routes = require('./routes').api,
  data = require('../../data.json'),
  u = require('url'),
  q = require('querystring')

module.exports = {
  createApi: async (url, req, res) => {
    //console.log(`${req.connection.remoteAddress} connected to API!`)

    if (routes.indexOf(url) !== -1) {
      let reponseData
      res.setHeader('Content-type', 'application/json')
      if (url === routes[0] || url === routes[1]) {
        switch (req.method) {
          //READ ALL
          case ('GET'):
            reponseData = await data
            res.write(JSON.stringify({status: 200, data: reponseData}))
            break

          //DELETE
          case ('DELETE'):
            const id = q.parse(u.parse(req.url).query)['id']
            delete data[id]
            reponseData = await data
            res.write(JSON.stringify({status: 200, data: reponseData}))
            break

          //UPDATE
          case ('PUT'):
            return await new Promise((resolve, reject) => {
              let bodyData = ''
              req.on('data', postData => { bodyData += postData })
              req.on('end', end => {
                resolve(bodyData)
              })
            }).then(body => {
              const con = JSON.parse(body).contact
              data[con['id']] = con
              res.write(JSON.stringify({status: 200, data: data}))
              res.end()
            })

          //CREATE
          case ('POST'):
            return await new Promise((resolve, reject) => {
              let bodyData = ''
              req.on('data', postData => { bodyData += postData })
              req.on('end', end => {
                resolve(bodyData)
              })
            }).then(body => {
              const con = JSON.parse(body).contact
              data[con['id']] = con
              res.write(JSON.stringify({status: 200, data: data}))
              res.end()
            })

          //READ ALL
          default:
            reponseData = await data
            res.write(JSON.stringify({status: 200, data: reponseData}))
            break
        }

      } else if (url === routes[2] || url === routes[3]) {

        //GET ONE
        const id = q.parse(u.parse(req.url).query)['id']
        reponseData = await data[id]
        res.write(JSON.stringify({status: 200, data: reponseData}))
      }

      res.statusCode = 200
      res.end()
    }
  }
}