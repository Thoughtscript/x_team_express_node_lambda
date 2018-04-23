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
http://localhost:7777/api:
```json
{"status":200,"data":[{"id":1,"name":"J Everyperson","email":"abcd@email.com","telegram_id":"@coolperson"},{"id":2,"name":"Larry Dude","email":"1234@email.com","telegram_id":"@dudeperson"},{"id":3,"name":"Ms. Ladyface","email":"efgh@email.com","telegram_id":"@ladyface"},{"id":4,"name":"J Nobody","email":"Nobody@email.com","telegram_id":"@Nobody"},{"id":5,"name":"Frankenstein","email":"monster@bash.com","telegram_id":"@monster"},{"id":6,"name":"Rockstar","email":"prima@donna.com","telegram_id":"@toocool"},{"id":7,"name":"beep boop","email":"imma@robot.com","telegram_id":"@robutnik"},{"id":8,"name":"Crazy Cat","email":"whiskers@chesire.com","telegram_id":"@meow"},{"id":9,"name":"The Red Devils","email":"market@garden.com","telegram_id":"@marketgarden"},{"id":10,"name":"Jar Jar Binks","email":"worst@character.ever","telegram_id":"@whatamievensaying"}]}
```

### Express

Start:
```bash
    $ npm run start-node
    //available on 8888
```
http://localhost:8888/api:
```json
{"status":200,"data":[{"id":1,"name":"J Everyperson","email":"abcd@email.com","telegram_id":"@coolperson"},{"id":2,"name":"Larry Dude","email":"1234@email.com","telegram_id":"@dudeperson"},{"id":3,"name":"Ms. Ladyface","email":"efgh@email.com","telegram_id":"@ladyface"},{"id":4,"name":"J Nobody","email":"Nobody@email.com","telegram_id":"@Nobody"},{"id":5,"name":"Frankenstein","email":"monster@bash.com","telegram_id":"@monster"},{"id":6,"name":"Rockstar","email":"prima@donna.com","telegram_id":"@toocool"},{"id":7,"name":"beep boop","email":"imma@robot.com","telegram_id":"@robutnik"},{"id":8,"name":"Crazy Cat","email":"whiskers@chesire.com","telegram_id":"@meow"},{"id":9,"name":"The Red Devils","email":"market@garden.com","telegram_id":"@marketgarden"},{"id":10,"name":"Jar Jar Binks","email":"worst@character.ever","telegram_id":"@whatamievensaying"}]}
```

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