import { makeGetCompanyUseCase } from 'main/factories/use-cases/company/get-company-use-case-factory'
import { GetCompanyController } from 'presentation/controllers/company/get-company-controller'
import { Controller } from 'presentation/protocols'

export const makeGetCompanyController = (): Controller => {
  return new GetCompanyController(makeGetCompanyUseCase())
}
