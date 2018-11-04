import UserService from '../services/user'
exports.handler = function(event, context, callback) {
  // your server-side functionality
  console.log('event', event, 'context', context)
  const { httpMethod, queryStringParameters, path, headers } = event
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(UserService.getRandomUser())
  })
}