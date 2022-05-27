import { Controller, HttpRequest } from '../../presentation/protocols'
import { APIGatewayProxyWithCognitoAuthorizerEvent } from 'aws-lambda'
import { ok } from 'presentation/helpers/http-helper'

export const adaptAPIGatewayProxyWithCognitoAuthorizerEventRoute = async (
  req: APIGatewayProxyWithCognitoAuthorizerEvent,
  controller: Controller
) => {
  let userId: string
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
  return ok(body)
}
