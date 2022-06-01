import {
  AttributeType,
  BillingMode,
  StreamViewType,
  Table
} from 'aws-cdk-lib/aws-dynamodb'
import {
  StringParameter,
  ParameterType,
  ParameterTier
} from 'aws-cdk-lib/aws-ssm'
import { Construct } from 'constructs'

export function makeSquadTable(app: Construct) {
  const resource = new Table(app, 'SquadsTable', {
    partitionKey: { name: 'squadId', type: AttributeType.STRING },
    tableName: 'squads',
    stream: StreamViewType.NEW_AND_OLD_IMAGES,
    billingMode: BillingMode.PAY_PER_REQUEST,
    pointInTimeRecovery: true
  })
  new StringParameter(
    app,
    'dynamoModule.infra.tables.squad.dynamodb.table.squad',
    {
      parameterName: 'dynamoModule.infra.tables.squad',
      stringValue: resource.tableName,
      type: ParameterType.STRING,
      tier: ParameterTier.STANDARD
    }
  )
  return resource
}
