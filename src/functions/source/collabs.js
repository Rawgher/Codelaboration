import CollabService from '../services/collab'
exports.handler = function(event, context, callback) {
  // your server-side functionality
  console.log('event', event, 'context', context)
  const { httpMethod, queryStringParameters, path, headers } = event
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(CollabService.getRandomCollabs()),
  })
}
