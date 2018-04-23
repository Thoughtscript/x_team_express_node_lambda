'use strict';

module.exports = {
  api_endpoints: [
    "https://ieer4zilwi.execute-api.us-west-2.amazonaws.com/Test/contacts",
    "http://localhost:7777/api",
    "http://localhost:8888/api"
  ],
  view_endpoints: [
    "https://ieer4zilwi.execute-api.us-west-2.amazonaws.com/Test/views",
    "http://localhost:7777",
    "http://localhost:8888"
  ],
  post: {
    id: 10,
    name: 'Daisy Dog',
    email: 'dog@canine.com',
    telegram_id: '@woof'
  },
  put: {
    id: 8,
    name: 'Daisy Dog',
    email: 'dog@canine.com',
    telegram_id: '@woof'
  }
}