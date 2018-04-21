const html = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="x-ua-compatible" content="ie=edge"><title>AWS Lambda 8.10</title><meta name="description" content="AWS Lambda 8.10"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body><div>Hello World!</div></body></html>'

/**
 Alter the returned RESPONSE 'content-type' in Amazon API Gateway
 */

exports.handler = (event, context) => {

  console.log(`Lambda Views Endpoint ... Event Received!`)

  if (event.schema === 'view') return async () => {
    let response = await html
    return context.succeed(response)
  }

  else return context.succeed('Lambda Contacts Schema API ... Please Supply Correct Schema!')
}