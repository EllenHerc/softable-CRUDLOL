import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'
import { PostCombatRepository } from 'data/protocols/post-combat-repository'
import { Combat } from 'domain/entities/combat'
import { CreateCombat } from 'domain/entities/create-combat'
import { dynamoHelper } from '../../dynamo-helper'

export class DynamoPostCombatRepository implements PostCombatRepository {
  private client: DynamoDBDocumentClient
  private TABLE_NAME = 'combats'

  constructor() {
    this.client = dynamoHelper.getClient()
  }

  async post(createCombat: CreateCombat): Promise<Combat> {
    return null
  }
}
