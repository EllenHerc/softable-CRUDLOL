import { DbGetCompany } from 'data/use-cases/db-get-company-use-case'
import { GetCompany } from 'domain/use-cases/get-company-use-case'
import { DynamoGetCompanyRepository } from 'infra/repositories/dynamo/repositories/company/dynamo-get-company-repository'

export const makeGetCompanyUseCase = (): GetCompany => {
  const dynamoGetCompanyRepository = new DynamoGetCompanyRepository()
  return new DbGetCompany(dynamoGetCompanyRepository)
}
