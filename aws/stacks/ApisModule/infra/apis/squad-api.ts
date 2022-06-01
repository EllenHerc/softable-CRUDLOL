import { RestApi, LambdaIntegration } from 'aws-cdk-lib/aws-apigateway'
import { Construct } from 'constructs'
import { importLambda } from '../../../helpers/import-lambda'

export function makeSquadsCombatsEllenApi(app: Construct) {
  const squadsCombatsApi = new RestApi(app, 'SquadsCombatsApi', {
    restApiName: 'SquadsCombatsApi',
    description: 'SquadsCombats Client API',
    // defaultCorsPreflightOptions: {
    //   allowOrigins: Cors.ALL_ORIGINS
    // },
    deploy: true,
    deployOptions: {
      stageName: 'dev'
    }
  })

  // const plan = squadsCombatsApi.addUsagePlan('devPlan', { name: 'dev' })
  // const apikey = squadsCombatsApi.addApiKey('apiKey')
  // plan.addApiKey(apikey)
  // plan.addApiStage({
  //   api: squadsCombatsApi,
  //   stage: squadsCombatsApi.deploymentStage
  // })

  const squads = squadsCombatsApi.root.addResource('squads')
  squads.addMethod(
    'POST',
    new LambdaIntegration(
      importLambda(
        app,
        'SquadModule.SquadModuleLambdas.infra.lambdas.functions.put-squad'
      )
    )
  )
  const squadId = squads.addResource('{squadId}')

  squadId.addMethod(
    'GET',
    new LambdaIntegration(
      importLambda(
        app,
        'SquadModule.SquadModuleLambdas.infra.lambdas.functions.get-squad'
      )
    )
  )

  squadId.addMethod(
    'DELETE',
    new LambdaIntegration(
      importLambda(
        app,
        'SquadModule.SquadModuleLambdas.infra.lambdas.functions.delete-squad'
      )
    )
  )

  const combats = squadsCombatsApi.root.addResource('combats')
  combats.addMethod(
    'POST',
    new LambdaIntegration(
      importLambda(
        app,
        'SquadModule.SquadModuleLambdas.infra.lambdas.functions.put-combat'
      )
    )
  )
}
