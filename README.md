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
        <th>
            <tr>Server</tr>
            <tr>Operation</tr>
            <tr>First Run</tr>
            <tr>Second Run</tr>
            <tr>Third Run</tr>
            <tr>Avg</tr>
        </th>
    </thead>
    <tbody>
        <th>
            <tr>AWS</tr>
            <tr>GET ONE</tr>
            <tr>369 ms</tr>
            <tr>138 ms</tr>
            <tr>329 ms</tr>
            <tr>278.66 avg ms</tr>
        </th>
        <th>
            <tr>Express</tr>
            <tr>GET ONE</tr>
            <tr>382 ms</tr>
            <tr>118 ms</tr>
            <tr>272</tr>
            <tr>257.33 avg ms</tr>
         </th>
         <th>
             <tr>Pure Node</tr>
             <tr>GET ONE</tr>
             <tr>360 ms</tr>
             <tr>118 ms</tr>
             <tr>290 ms</tr>
             <tr>256 avg ms</tr>
         </th>
    </tbody>
</table>

**Winner:** Pure Node (256 avg ms)

<table>
    <thead>
        <th>
            <tr>Server</tr>
            <tr>Operation</tr>
            <tr>First Run</tr>
            <tr>Second Run</tr>
            <tr>Third Run</tr>
            <tr>Avg</tr>
        </th>
    </thead>
    <tbody>
        <th>
            <tr>AWS</tr>
            <tr>GET ALL</tr>
            <tr>12916 ms</tr>
            <tr>10574 ms</tr>
            <tr>12511 ms</tr>
            <tr>12,000 avg ms</tr>
        </th>
        <th>
            <tr>Express</tr>
            <tr>GET ALL</tr>
            <tr>141 ms</tr>
            <tr>239 ms</tr>
            <tr>274</tr>
            <tr>218 avg ms</tr>
         </th>
         <th>
             <tr>Pure Node</tr>
             <tr>GET ALL</tr>
             <tr>102 ms</tr>
             <tr>205 ms</tr>
             <tr>199 ms</tr>
             <tr>168.66 avg ms</tr>
         </th>
    </tbody>
</table>

**Winner:** Pure Node (168.66 avg ms)

<table>
    <thead>
        <th>
            <tr>Server</tr>
            <tr>Operation</tr>
            <tr>First Run</tr>
            <tr>Second Run</tr>
            <tr>Third Run</tr>
            <tr>Avg</tr>
        </th>
    </thead>
    <tbody>
        <th>
            <tr>AWS</tr>
            <tr>POST</tr>
            <tr>228 ms</tr>
            <tr>234 ms</tr>
            <tr>367 ms</tr>
            <tr>276.33 avg ms</tr>
        </th>
        <th>
            <tr>Express</tr>
            <tr>POST</tr>
            <tr>227 ms</tr>
            <tr>214 ms</tr>
            <tr>290</tr>
            <tr>243.66 avg ms</tr>
         </th>
         <th>
             <tr>Pure Node</tr>
             <tr>POST</tr>
             <tr>201 ms</tr>
             <tr>196 ms</tr>
             <tr>304 ms</tr>
             <tr>233.66 avg ms</tr>
         </th>
    </tbody>
</table>

**Winner:** Pure Node (233.66 avg ms)

<table>
    <thead>
        <th>
            <tr>Server</tr>
            <tr>Operation</tr>
            <tr>First Run</tr>
            <tr>Second Run</tr>
            <tr>Third Run</tr>
            <tr>Avg</tr>
        </th>
    </thead>
    <tbody>
        <th>
            <tr>AWS</tr>
            <tr>PUT</tr>
            <tr>163 ms</tr>
            <tr>278 ms</tr>
            <tr>345 ms</tr>
            <tr>262 avg ms</tr>
        </th>
        <th>
            <tr>Express</tr>
            <tr>PUT</tr>
            <tr>118 ms</tr>
            <tr>272 ms</tr>
            <tr>306</tr>
            <tr>232 avg ms</tr>
         </th>
         <th>
             <tr>Pure Node</tr>
             <tr>PUT</tr>
             <tr>127 ms</tr>
             <tr>292 ms</tr>
             <tr>306 ms</tr>
             <tr>241.66 avg ms</tr>
         </th>
    </tbody>
</table>

**Winner:** Express (232 avg ms)

<table>
    <thead>
        <th>
            <tr>Server</tr>
            <tr>Operation</tr>
            <tr>First Run</tr>
            <tr>Second Run</tr>
            <tr>Third Run</tr>
            <tr>Avg</tr>
        </th>
    </thead>
    <tbody>
        <th>
            <tr>AWS</tr>
            <tr>HTML</tr>
            <tr>12774 ms</tr>
            <tr>12230 ms</tr>
            <tr>15170 ms</tr>
            <tr>13391 avg ms</tr>
        </th>
        <th>
            <tr>Express</tr>
            <tr>HTML</tr>
            <tr>340 ms</tr>
            <tr>82 ms</tr>
            <tr>223</tr>
            <tr>215 avg ms</tr>
         </th>
         <th>
             <tr>Pure Node</tr>
             <tr>HTML</tr>
             <tr>341 ms</tr>
             <tr>79 ms</tr>
             <tr>231 ms</tr>
             <tr>217 avg ms</tr>
         </th>
    </tbody>
</table>

**Winner:** Express (215 avg ms)

<table>
    <thead>
        <th>
            <tr>Server</tr>
            <tr>Operation</tr>
            <tr>First Run</tr>
            <tr>Second Run</tr>
            <tr>Third Run</tr>
            <tr>Avg</tr>
        </th>
    </thead>
    <tbody>
        <th>
            <tr>AWS</tr>
            <tr>DELETE</tr>
            <tr>383 ms</tr>
            <tr>130 ms</tr>
            <tr>351 ms</tr>
            <tr>288 avg ms</tr>
        </th>
        <th>
            <tr>Express</tr>
            <tr>DELETE</tr>
            <tr>258 ms</tr>
            <tr>114 ms</tr>
            <tr>231</tr>
            <tr>201 avg ms</tr>
         </th>
         <th>
             <tr>Pure Node</tr>
             <tr>DELETE</tr>
             <tr>283 ms</tr>
             <tr>96 ms</tr>
             <tr>325 ms</tr>
             <tr>234.66 avg ms</tr>
         </th>
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