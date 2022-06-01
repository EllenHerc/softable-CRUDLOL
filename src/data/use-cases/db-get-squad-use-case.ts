import { GetSquadRepository } from 'data/protocols/get-squad-repository'
import { Squad } from 'domain/entities/squad'
import { GetSquad } from 'domain/use-cases/get-squad-use-case'

export class DbGetSquad implements GetSquad {
  constructor(private readonly getSquadRepository: GetSquadRepository) {}
  async get(squadId: string): Promise<Squad> {
    return await this.getSquadRepository.get(squadId)
  }
}
