'use strict';

/**
 * Core Http server
 */

module.exports = {
  createHttpServer: port => {

    const s = (require('http')).createServer((req, res)=> {
      const uri = (require('url')).parse(req.url).pathname;
      require('../routes/mainController').createViewController(uri, req, res);
      require('../routes/restApi').createApi(uri, req, res);
    });

    console.log('HTTP initialized!');
    console.log('View controller initialized!');

    s.on('clientError', (err, sck) => {
      const e = `HTTP/1.1 400 Bad Request! ${err}`;
      console.error(e);
      sck.end(e);
    });

    s.listen(port, ()=> {
      console.log(`HTTP server started on port: ${s.address().port}`);
    });
    return s;
  }

};