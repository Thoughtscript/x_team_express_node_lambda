'use strict';

const phantom = require('phantom')

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

before().then(setupComplete => {
  //Wait a bit for the the liveservers to launch and initialize
  console.log('Page Load Tests Beginning!')
  setTimeout(() => {
    //We start our tests
    loadPage('aphrodite', 1111).then(aphrodite =>
      loadPage('cxs', 2222).then(cxs =>
        loadPage('emotion', 3333).then(emotion =>
          loadPage('glamorous', 4444).then(glamorous =>
            loadPage('jss', 5555).then(jss =>
              loadPage('radium', 9999).then(radium =>
                loadPage('styled-components', 7777).then(styled =>
                  loadPage('styletron', 8888).then(styletron => {
                      //Wait for any asynchronous errors
                      console.log('Page Load Tests Complete!')
                      setTimeout(() => {
                        after()
                      }, 15000)
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
