import {
  DynamoDBDocumentClient,
  GetCommand,
  GetCommandInput
} from '@aws-sdk/lib-dynamodb'
import { GetSquadRepository } from 'data/protocols/get-squad-repository'
import { Squad } from 'domain/entities/squad'
import { dynamoHelper } from '../../dynamo-helper'

export class DynamoGetSquadRepository implements GetSquadRepository {
  private client: DynamoDBDocumentClient
  private TABLE_NAME = 'squads'

  constructor() {
    this.client = dynamoHelper.getClient()
  }

  async get(squadId: string): Promise<Squad> {
    const params: GetCommandInput = {
      Key: { squadId },
      TableName: this.TABLE_NAME
    }

    const responseDB = await this.client.send(new GetCommand(params))

    return responseDB.Item as Squad
  }
}
