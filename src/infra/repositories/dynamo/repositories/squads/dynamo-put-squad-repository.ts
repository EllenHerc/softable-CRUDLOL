import {
  DynamoDBDocumentClient,
  PutCommand,
  PutCommandInput
} from '@aws-sdk/lib-dynamodb'
import { PutSquadRepository } from 'data/protocols/put-squad-repository'
import { Squad } from 'domain/entities/squad'
import { dynamoHelper } from '../../dynamo-helper'

export class DynamoPutSquadRepository implements PutSquadRepository {
  private client: DynamoDBDocumentClient
  private TABLE_NAME = 'squads'

  constructor() {
    this.client = dynamoHelper.getClient()
  }

  async put(squad: Squad): Promise<any> {
    const params: PutCommandInput = {
      Item: squad,
      TableName: this.TABLE_NAME
    }

    const responseDB = await this.client.send(new PutCommand(params))

    return responseDB
  }
}
