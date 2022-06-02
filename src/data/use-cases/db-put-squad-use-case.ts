import { PutSquadRepository } from 'data/protocols/put-squad-repository'
import { CreateSquad } from 'domain/entities/create-squad'
import { PutSquad } from 'domain/use-cases/put-squad-use-case'

export class DbPutSquad implements PutSquad {
  constructor(private readonly postSquadRepository: PutSquadRepository) {}
  async put(createSquad: CreateSquad): Promise<any> {
    return await this.postSquadRepository.put(createSquad)
  }
}
