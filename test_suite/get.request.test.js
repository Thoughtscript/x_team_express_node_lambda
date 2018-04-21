'use strict';


const before = () => new Promise((res, rej) => {
    try {


    } catch
      (ex) {
      console.error(`Exception setting up tests: ${ex}`)
      process.exit(0)
    }
    return res(console.log('Tests setup!'))
  }),
  after = () => {

    console.log('Tests complete - servers shut down!')
    process.exit(0)
  }

const loadPage = async (testLabel, port) => {
  let start = Date.now()
  const instance = await phantom.create([], {
      logger: {warn: console.log, info: () => {}, debug: () => {}, error: console.log}
    }),
    page = await instance.createPage()
  const status = await page.open('http://localhost:' + port),
    msg = await `${testLabel} test completed in ${Date.now() - start} ms on port ${port} - ${status}`
  console.log(msg)
  await instance.exit()
}

requests = (testLabel, port, cycles) => {
  return new Promise((res, rej) => {
    let start = Date.now(), promises = []
    try {
      for (let i = 0; i < cycles; i++) {

        let prom = new Promise((innerResolve, innerRej) =>
          request('http://localhost:' + port, (err, response, body) =>  innerResolve(response))
        )
        promises.push(prom)

      }
    } catch (ex) {
      liveServer.shutdown()
      console.log(`Exception setting up tests: ${ex}`)
      process.exit(0)
    }
    Promise.all(promises).then(v =>
      res(console.log(`${testLabel} test completed after ${cycles} requests in ${Date.now() - start} ms on port ${port}`))
    )
  })
}

before().then(setupComplete => {
  //Wait a bit for the the liveservers to launch and initialize
  console.log('Preparing to start tests!')
  setTimeout(() => {
    //We start our tests

    requests('aphrodite', 1111, 1000).then(aphrodite =>
      requests('cxs', 2222, 1000).then(cxs =>
        requests('emotion', 3333, 1000).then(emotion =>
          requests('glamorous', 4444, 1000).then(glamorous =>
            requests('jss', 5555, 1000).then(jss =>
              requests('radium', 9999, 1000).then(radium =>
                requests('styled-components', 7777, 1000).then(styled =>
                  requests('styletron', 8888, 1000).then(styletron => {

                      //Wait for any asynchronous errors
                      console.log('Preparing to shutdown!')
                      setTimeout(() => {
                        after()
                      }, 10000)

                    }
                  )
                )
              )
            )
          )
        )
      )
    )

  }, 15000)
})