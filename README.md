# x_team_express_node_lambda

X-Team Express, AWS Lambda, and Node comparison example.

# Testing Specifics

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

Each server contains the following base cases:

```
    (1) Fetch One / Read One - REST GET
    (2) Fetch All / List - REST GET
    (3) Delete One - REST DELETE
    (4) Update - REST UPDATE
    (5) Create - REST POST 
    (6) Render View
```

Our aim will be to isolate our testing around the server API functionalities rather than data-layer and server interoperability since there are many variables that can modify our performance results.

Instead, we'll use a preset array of ten (10) objects `data.json.js` for all CRUD-related operations.

# Great Comparison Articles

https://raygun.com/blog/node-js-performance-2017/

https://www.airpair.com/node.js/posts/nodejs-framework-comparison-express-koa-hapi