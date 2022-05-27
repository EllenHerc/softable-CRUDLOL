import { GetCompanyRepository } from 'data/protocols/get-company-repository'
import { Company } from 'domain/entities/company'
import { dynamoHelper } from '../../dynamo-helper'


export class DynamoGetCompanyRepository implements GetCompanyRepository {
  private client
  private TABLE_NAME = 'companies'

  constructor() {
    this.client = dynamoHelper.getClient()
  }

  async get(companyId: string): Promise<Company> {
    return null
  }
}
