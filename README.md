# x_team_express_node_lambda

X-Team Express, AWS Lambda, and Node comparison example.

# Servers

***(Please note that all credentials contained herein were used for testing purposes only and represent example URL's - they are not production nor live URL's)***

### Specs

We'll use Node `8.10` since it's the most recent version useable and common to all three test scenarios:

```json
 "engines": {
    "node": "=8.10"
  },
```
```json
    "aws-sdk": "=2.226.1",
    "express": "=4.16.3"
```

<a href="https://docs.aws.amazon.com/lambda/latest/dg/programming-model.html">AWS Lambda</a> on the <a href="https://aws.amazon.com/about-aws/whats-new/2018/04/aws-lambda-supports-nodejs/">Apr 2, 2018 release</a>    
<a href="https://nodejs.org/en/download/releases/">Node 8.10</a>   
<a href="https://www.npmjs.com/package/express">Express 4.16.3</a>   

### Node

Start:
```bash
    $ npm run start-express
    //available on 7777
```
To access static assets throw these into your `html`:
```html
<link type="text/css" rel="stylesheet" href="style.css" />
<script src="script.js"  type="text/css"></script>
```
### Express

Start:
```bash
    $ npm run start-node
    //available on 8888
```

### Endpoints

API:
```
    //AWS Gateway
    https://[GATEWAY].execute-api.us-west-2.amazonaws.com/Test/contacts

    //Pure Node
    localhost:7777/api

    //Pure Node Get One
    localhost:7777/api/one/?id=1

    //Express
    localhost:8888/api

    //Express Get One
    localhost:8888/api/one/?id=1

    //Pure Node Delete
    localhost:7777/api/?id=1

    //Express Delete
    localhost:8888/api/?id=1
```

Views:
```
    https://[GATEWAY].execute-api.us-west-2.amazonaws.com/Test/views
    localhost:7777
    localhost:8888
```

### Results

***(All servers were deployed to AWS for testing)***

<table>
    <thead>
        <tr>
            <th>Server</th>
            <th>Operation</th>
            <th>First Run</th>
            <th>Second Run</th>
            <th>Third Run</th>
            <th>Avg</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>AWS</th>
            <th>GET ONE</th>
            <th>369 ms</th>
            <th>138 ms</th>
            <th>329 ms</th>
            <th>278.66 avg ms</th>
        </tr>
        <tr>
            <tr>Express</th>
            <th>GET ONE</th>
            <th>382 ms</th>
            <th>118 ms</th>
            <th>272</th>
            <th>257.33 avg ms</th>
         </tr>
         <tr>
             <th>Pure Node</th>
             <th>GET ONE</th>
             <th>360 ms</th>
             <th>118 ms</th>
             <th>290 ms</th>
             <th>256 avg ms</th>
         </tr>
    </tbody>
</table>

**Winner:** Pure Node (256 avg ms)

<table>
    <thead>
        <tr>
            <th>Server</th>
            <th>Operation</th>
            <th>First Run</th>
            <th>Second Run</th>
            <th>Third Run</th>
            <th>Avg</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>AWS</th>
            <th>GET ALL</th>
            <th>12916 ms</th>
            <th>10574 ms</th>
            <th>12511 ms</th>
            <th>12,000 avg ms</th>
        </tr>
        <tr>
            <th>Express</th>
            <th>GET ALL</th>
            <th>141 ms</th>
            <th>239 ms</th>
            <th>274</th>
            <th>218 avg ms</th>
         </tr>
         <tr>
             <th>Pure Node</th>
             <th>GET ALL</th>
             <th>102 ms</th>
             <th>205 ms</th>
             <th>199 ms</th>
             <th>168.66 avg ms</th>
         </tr>
    </tbody>
</table>

**Winner:** Pure Node (168.66 avg ms)

<table>
    <thead>
        <tr>
            <th>Server</th>
            <th>Operation</th>
            <th>First Run</th>
            <th>Second Run</th>
            <th>Third Run</th>
            <th>Avg</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>AWS</th>
            <th>POST</th>
            <th>228 ms</th>
            <th>234 ms</th>
            <th>367 ms</th>
            <th>276.33 avg ms</th>
        </tr>
        <tr>
            <th>Express</th>
            <th>POST</th>
            <th>227 ms</th>
            <th>214 ms</th>
            <th>290</th>
            <th>243.66 avg ms</th>
         </tr>
         <tr>
             <th>Pure Node</th>
             <th>POST</th>
             <th>201 ms</th>
             <th>196 ms</th>
             <th>304 ms</th>
             <th>233.66 avg ms</th>
         </tr>
    </tbody>
</table>

**Winner:** Pure Node (233.66 avg ms)

<table>
    <thead>
        <tr>
            <th>Server</th>
            <th>Operation</th>
            <th>First Run</th>
            <th>Second Run</th>
            <th>Third Run</th>
            <th>Avg</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>AWS</th>
            <th>PUT</th>
            <th>163 ms</th>
            <th>278 ms</th>
            <th>345 ms</th>
            <th>262 avg ms</th>
        </tr>
        <tr>
            <th>Express</th>
            <th>PUT</th>
            <th>118 ms</th>
            <th>272 ms</th>
            <th>306</th>
            <th>232 avg ms</th>
         </tr>
         <tr>
             <th>Pure Node</th>
             <th>PUT</th>
             <th>127 ms</th>
             <th>292 ms</th>
             <th>306 ms</th>
             <th>241.66 avg ms</th>
         </tr>
    </tbody>
</table>

**Winner:** Express (232 avg ms)

<table>
    <thead>
        <tr>
            <th>Server</th>
            <th>Operation</th>
            <th>First Run</th>
            <th>Second Run</th>
            <th>Third Run</th>
            <th>Avg</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>AWS</th>
            <th>HTML</th>
            <th>12774 ms</th>
            <th>12230 ms</th>
            <th>15170 ms</th>
            <th>13391 avg ms</th>
        </tr>
        <tr>
            <th>Express</th>
            <th>HTML</th>
            <th>340 ms</th>
            <th>82 ms</th>
            <th>223</th>
            <th>215 avg ms</th>
         </tr>
         <tr>
             <th>Pure Node</th>
             <th>HTML</th>
             <th>341 ms</th>
             <th>79 ms</th>
             <th>231 ms</th>
             <th>217 avg ms</th>
         </tr>
    </tbody>
</table>

**Winner:** Express (215 avg ms)

<table>
    <thead>
        <tr>
            <th>Server</th>
            <th>Operation</th>
            <th>First Run</th>
            <th>Second Run</th>
            <th>Third Run</th>
            <th>Avg</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>AWS</th>
            <th>DELETE</th>
            <th>383 ms</th>
            <th>130 ms</th>
            <th>351 ms</th>
            <th>288 avg ms</th>
        </tr>
        <tr>
            <th>Express</th>
            <th>DELETE</th>
            <th>258 ms</th>
            <th>114 ms</th>
            <th>231</th>
            <th>201 avg ms</th>
         </tr>
         <tr>
             <th>Pure Node</th>
             <th>DELETE</th>
             <th>283 ms</th>
             <th>96 ms</th>
             <th>325 ms</th>
             <th>234.66 avg ms</th>
         </tr>
    </tbody>
</table>

**Winner:** Express (201 avg ms)

# Testing Specifics

Each server will be tested according to the following base cases:
```
    (1) Fetch One / Read One - REST GET
    (2) Fetch All / List - REST GET
    (3) Delete One - REST DELETE
    (4) Update - REST UPDATE
    (5) Create - REST POST 
    (6) Render View
```

Each server will be hosted on AWS.

Our aim will be to isolate our testing around the server API functionalities rather than data-layer and server interoperability since there are many variables that can modify our performance results.

Instead, we'll use a preset array of ten (10) objects `data.json.js` for all CRUD-related operations.

# Great Comparison Articles

https://raygun.com/blog/node-js-performance-2017/

https://www.airpair.com/node.js/posts/nodejs-framework-comparison-express-koa-hapi