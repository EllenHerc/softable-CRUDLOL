import { PutItemCommand } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, PutCommandInput } from '@aws-sdk/lib-dynamodb'
import { PostSquadRepository } from 'data/protocols/post-squad-repository'
import { Squad } from 'domain/entities/squad'
import { dynamoHelper } from '../../dynamo-helper'

export class DynamoPostSquadRepository implements PostSquadRepository {
  private client: DynamoDBDocumentClient
  private TABLE_NAME = 'squads'

  constructor() {
    this.client = dynamoHelper.getClient()
  }

  async post(squad: Squad): Promise<any> {
    const params: PutCommandInput = {
      Item: {
        squad
      },
      TableName: this.TABLE_NAME
    }

    const responseDB = await this.client.send(new PutItemCommand(params))

    return responseDB
  }
}
