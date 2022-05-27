import { Company } from 'domain/entities/company'
import { GetCompanyRepository } from 'data/protocols/get-company-repository'
import { GetCompany } from 'domain/use-cases/get-company-use-case'

export class DbGetCompany implements GetCompany {
  constructor(private readonly getCompanyRepository: GetCompanyRepository) {}
  async get(companyId: string): Promise<Company> {
    return await this.getCompanyRepository.get(companyId)
  }
}
