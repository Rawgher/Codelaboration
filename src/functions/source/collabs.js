
import CollabService from '../services/collab'
/*
{
    "path": "Path parameter",
    "httpMethod": "Incoming request's method name"
    "headers": {Incoming request headers}
    "queryStringParameters": {query string parameters }
    "body": "A JSON string of the request payload."
    "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
}
*/

exports.handler = function(event, context, callback) {
  // your server-side functionality
  console.log('event', event, 'context', context)
  const { httpMethod, queryStringParameters, path, headers } = event
  let statusCode = 200, body
  switch (httpMethod) {
    case 'GET':
      if (queryStringParameters && queryStringParameters.id){
        body = CollabService.getCollab(
          JSON.parse(queryStringParameters.id)
        )
      } else {
        body = CollabService.listCollabs()
      }
      break
    case 'POST':
    case 'PUT':
      if (body && body.name && body.description) {
        CollabService.addUser(body)
        body = 'success'
      } else {
        statusCode = 400
        body = `Invalid parameters`
      }
      break
    case 'DELETE':
      if (queryStringParameters && queryStringParameters.id) {
        CollabService.deleteCollab(queryStringParameters.id)
        body = 'success'
      } else {
        statusCode = 400
        body = `Invalid parameters`
      }
      break
    default:
      statusCode = 400
      body = `Invalid API operation`
  }
  callback(null, {
    statusCode,
    body: JSON.stringify(body)
  })
}
