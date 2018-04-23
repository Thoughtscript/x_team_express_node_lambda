'use strict'

const request = require('request'),
  c = require('./test.config')

const before = () => new Promise((res, rej) => res(console.log('Tests setup!'))),
  after = () => {
    console.log('Tests complete - servers shut down!')
    process.exit(0)
  },
  requests = (testLabel, data, cycles) => {
    return new Promise((res, rej) => {
      let start = Date.now(), promises = []
      try {
        for (let i = 0; i < cycles; i++) {
          let prom = new Promise((innerResolve, innerRej) => request(data, (err, response, body) => innerResolve(response)))
          promises.push(prom)
        }
      } catch (ex) {
        console.error(`Exception setting up tests: ${ex}`)
        process.exit(0)
      }
      Promise.all(promises).then(v =>
        res(console.log(`${testLabel} test completed after ${cycles} requests in ${Date.now() - start} ms on url ${data.uri}`))
      )
    })
  }

before().then(setupComplete => {
  console.log('POST Load Tests Beginning!')
  requests('aws', {uri: c.api_endpoints[0], method: 'POST', body: c.aws_create}, 1000).then(aws =>
    requests('express', {uri: c.api_endpoints[3], method: 'POST', body: {contact: c.post}}, 1000).then(express =>
      requests('purenode', {uri: c.api_endpoints[1], method: 'POST', body: {contact: c.post}}, 1000).then(purenode =>
        after()
      )
    )
  )
})
