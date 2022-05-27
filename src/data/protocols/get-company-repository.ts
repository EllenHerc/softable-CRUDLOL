import { Company } from 'domain/entities/company'

export interface GetCompanyRepository {
  get: (companyId: string) => Promise<Company>
}
