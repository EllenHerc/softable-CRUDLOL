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

export function makeCombatTable(app: Construct) {
  const resource = new Table(app, 'CombatsTable', {
    partitionKey: { name: 'combatId', type: AttributeType.STRING },
    tableName: 'combats',
    stream: StreamViewType.NEW_AND_OLD_IMAGES,
    billingMode: BillingMode.PAY_PER_REQUEST,
    pointInTimeRecovery: true
  })
  new StringParameter(
    app,
    'dynamoModule.infra.tables.combat.dynamodb.table.combat',
    {
      parameterName: 'dynamoModule.infra.tables.combat',
      stringValue: resource.tableName,
      type: ParameterType.STRING,
      tier: ParameterTier.STANDARD
    }
  )
  return resource
}
