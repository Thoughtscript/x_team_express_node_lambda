const data = [
  {
    id: 0,
    name: 'J Everyperson',
    email: 'abcd@email.com',
    telegram_id: '@coolperson'
  },
  {
    id: 1,
    name: 'Larry Dude',
    email: '1234@email.com',
    telegram_id: '@dudeperson'
  },
  {
    id: 2,
    name: 'Ms. Ladyface',
    email: 'efgh@email.com',
    telegram_id: '@ladyface'
  },
  {
    id: 3,
    name: 'J Nobody',
    email: 'Nobody@email.com',
    telegram_id: '@Nobody'
  },
  {
    id: 4,
    name: 'Frankenstein',
    email: 'monster@bash.com',
    telegram_id: '@monster'
  },
  {
    id: 5,
    name: 'Rockstar',
    email: 'prima@donna.com',
    telegram_id: '@toocool'
  },
  {
    id: 6,
    name: 'beep boop',
    email: 'imma@robot.com',
    telegram_id: '@robutnik'
  },
  {
    id: 7,
    name: 'Crazy Cat',
    email: 'whiskers@chesire.com',
    telegram_id: '@meow'
  },
  {
    id: 8,
    name: 'The Red Devils',
    email: 'market@garden.com',
    telegram_id: '@marketgarden'
  },
  {
    id: 9,
    name: 'Jar Jar Binks',
    email: 'worst@character.ever',
    telegram_id: '@whatamievensaying'
  }
]

exports.handler = async (event, context) => {
  let response;

  console.log(`Lambda Contacts Schema API ... Event Received!`)

  switch (event.method) {
    case 'LIST':
      response = await data
      return context.succeed(response)
    case 'GET':
      return async () => {
        let response = await data[event.contact.id]
        return context.succeed(response)
      }
    case 'POST':
      return async () => {
        data[data.length] = event.contact
        let response = await data
        return context.succeed(response)
      }
    case 'PUT':
      return async () => {
        data[event.contact.id] = event.contact
        response = await data
        return context.succeed(response)
      }
    case 'DELETE':
      return async () => {
        delete data[event.contact.id]
        response = await data
        return context.succeed(response)
      }
    default:
      response = await data
      return context.succeed(response)
  }
}