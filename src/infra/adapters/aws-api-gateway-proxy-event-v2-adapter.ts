import { Controller, HttpRequest } from '../../presentation/protocols'
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda'

export const adaptAPIGatewayProxyEventV2Route = async (
  req: APIGatewayProxyEventV2,
  controller: Controller
) => {
  let userId
  try {
    userId = req.requestContext.authorizer.claims['cognito:username'] || ''
  } catch (e) {
    console.error(e)
    userId = ''
  }

  const httpRequest: HttpRequest = {
    headers: req.headers || {},
    body: (req.body && JSON.parse(req.body)) || {},
    pathParameters: req.pathParameters || {},
    userId,
    queryStringParameters: req.queryStringParameters || {}
  }

  const httpResponse = await controller.handle(httpRequest)
  const body = httpResponse.body ? JSON.stringify(httpResponse.body) : null
  return {
    statusCode: httpResponse.statusCode,
    body,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  } as APIGatewayProxyResultV2
}
