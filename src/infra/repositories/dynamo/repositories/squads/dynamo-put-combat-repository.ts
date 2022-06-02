import {
  DynamoDBDocumentClient,
  PutCommand,
  PutCommandInput
} from '@aws-sdk/lib-dynamodb'
import { PutCombatRepository } from 'data/protocols/put-combat-repository'
import { Combat } from 'domain/entities/combat'
import { dynamoHelper } from '../../dynamo-helper'

export class DynamoPutCombatRepository implements PutCombatRepository {
  private client: DynamoDBDocumentClient
  private TABLE_NAME = 'combats'

  constructor() {
    this.client = dynamoHelper.getClient()
  }

  async put(combat: Combat): Promise<any> {
    const params: PutCommandInput = {
      Item: combat,
      TableName: this.TABLE_NAME
    }
    const responseDB = await this.client.send(new PutCommand(params))

    return responseDB
  }
}
