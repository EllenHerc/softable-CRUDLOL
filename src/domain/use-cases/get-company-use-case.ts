import { Company } from 'domain/entities/company'

export interface GetCompany {
  get: (companyId: string) => Promise<Company>
}
