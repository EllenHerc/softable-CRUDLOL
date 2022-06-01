import { APIGatewayProxyResultV2, APIGatewayProxyEventV2 } from 'aws-lambda'
import { adaptAPIGatewayProxyEventV2Route } from 'infra/adapters/aws-api-gateway-proxy-event-v2-adapter'
import { makeGetSquadController } from 'main/factories/controllers/squads/get-squad-controller-factory'

export async function handler(
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> {
  console.log('event: ', JSON.stringify(event))
  const response = await adaptAPIGatewayProxyEventV2Route(
    event,
    makeGetSquadController()
  )
  return response
}
