import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import path from 'path'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import { RetentionDays } from 'aws-cdk-lib/aws-logs'
import { Duration } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import {
  ParameterTier,
  ParameterType,
  StringParameter
} from 'aws-cdk-lib/aws-ssm'
import { Table } from 'aws-cdk-lib/aws-dynamodb'

export function makeCombatsSquadsPutCombatLambda(app: Construct) {
  const resource = new NodejsFunction(app, 'SquadModuleLambdaPutCombat', {
    handler: 'handler',
    functionName: 'API-Ellen-putCombat',
    entry: path.join(__dirname, '/handler.ts'),
    runtime: lambda.Runtime.NODEJS_14_X,
    logRetention: RetentionDays.SIX_MONTHS,
    timeout: Duration.seconds(15)
  })

  const tableSquads = Table.fromTableName(app, 'squadsTableUpdate', 'squads')
  tableSquads.grantReadWriteData(resource)

  const tableCombats = Table.fromTableName(app, 'combatsTable', 'combats')
  tableCombats.grantWriteData(resource)

  const stringParameter =
    'SquadModule.SquadModuleLambdas.infra.lambdas.functions.put-combat'
  new StringParameter(app, stringParameter, {
    parameterName: stringParameter,
    stringValue: resource.functionArn,
    type: ParameterType.STRING,
    tier: ParameterTier.STANDARD
  })

  return resource
}
