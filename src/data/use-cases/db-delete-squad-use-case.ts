import { DeleteSquadRepository } from 'data/protocols/delete-squad-repository'
import { DeleteSquad } from 'domain/use-cases/delete-squad-use-case'

export class DbDeleteSquad implements DeleteSquad {
  constructor(private readonly deleteSquadRepository: DeleteSquadRepository) {}
  async delete(squadId: string): Promise<boolean> {
    return await this.deleteSquadRepository.delete(squadId)
  }
}
