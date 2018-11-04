import UserCollabService from '../services/user-collab'

exports.handler = function(event, context, callback) {
  // your server-side functionality
  console.log('event', event, 'context', context)
  const { httpMethod, queryStringParameters, path, headers } = event
  let statusCode = 200, body
  // switch (httpMethod) {
  //   case 'GET':
  //     if (queryStringParameters && queryStringParameters.userId){
  //       body = UserCollabService.getRandomUserCollabs(10)
  //         JSON.parse(queryStringParameters.id)
  //       )
  //     } else {
  //       body = CollabService.listCollabs()
  //     }
  //     break
  //   case 'POST':
  //   case 'PUT':
  //     if (body && body.name && body.description) {
  //       CollabService.addUser(body)
  //       body = 'success'
  //     } else {
  //       statusCode = 400
  //       body = `Invalid parameters`
  //     }
  //     break
  //   case 'DELETE':
  //     if (queryStringParameters && queryStringParameters.id) {
  //       CollabService.deleteCollab(queryStringParameters.id)
  //       body = 'success'
  //     } else {
  //       statusCode = 400
  //       body = `Invalid parameters`
  //     }
  //     break
  //   default:
  //     statusCode = 400
  //     body = `Invalid API operation`
  // }
  callback(null, {
    statusCode,
    body: JSON.stringify(body)
  })
}
