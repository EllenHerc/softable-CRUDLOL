import {
  DeleteCommand,
  DeleteCommandInput,
  DynamoDBDocumentClient
} from '@aws-sdk/lib-dynamodb'
import { DeleteSquadRepository } from 'data/protocols/delete-squad-repository'
import { dynamoHelper } from '../../dynamo-helper'

export class DynamoDeleteSquadRepository implements DeleteSquadRepository {
  private client: DynamoDBDocumentClient
  private TABLE_NAME = 'squads'

  constructor() {
    this.client = dynamoHelper.getClient()
  }

  async delete(squadId: string): Promise<boolean> {
    const params: DeleteCommandInput = {
      Key: { squadId },
      TableName: this.TABLE_NAME
    }
    let response: boolean = false
    try {
      const responseDB = await this.client.send(new DeleteCommand(params))
      console.log('Success - squad deleted!! ' + responseDB)
      response = true
    } catch (err) {
      console.log('Error', err)
      response = false
    }
    return response
  }
}
