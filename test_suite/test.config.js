'use strict'

module.exports = {
  //API endpoints
  api_endpoints: [
    'https://ieer4zilwi.execute-api.us-west-2.amazonaws.com/Test/contacts',
    'ec2-34-216-8-217.us-west-2.compute.amazonaws.com:7777/api',
    'ec2-34-216-8-217.us-west-2.compute.amazonaws.com:7777/api/one/?id=1',
    'ec2-34-216-8-217.us-west-2.compute.amazonaws.com:8888/api',
    'ec2-34-216-8-217.us-west-2.compute.amazonaws.com:8888/api/one/?id=1',
    'ec2-34-216-8-217.us-west-2.compute.amazonaws.com:7777/api/?id=1',
    'ec2-34-216-8-217.us-west-2.compute.amazonaws.com:8888/api/?id=1'
  ],
  //View endpoints
  view_endpoints: [
    'https://ieer4zilwi.execute-api.us-west-2.amazonaws.com/Test/views',
    'ec2-34-216-8-217.us-west-2.compute.amazonaws.com:7777',
    'ec2-34-216-8-217.us-west-2.compute.amazonaws.com:8888'
  ],
  //JSON body data
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
  },
  //AWS data
  aws_list: require('../aws/contacts API example queries/all.json'),
  aws_one: require('../aws/contacts API example queries/one.json'),
  aws_update: require('../aws/contacts API example queries/update.json'),
  aws_delete: require('../aws/contacts API example queries/delete.json'),
  aws_create: require('../aws/contacts API example queries/create.json')
}