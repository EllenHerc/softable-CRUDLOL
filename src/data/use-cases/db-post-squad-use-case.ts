import { PostSquadRepository } from 'data/protocols/post-squad-repository'
import { Squad } from 'domain/entities/squad'
import { PostSquad } from 'domain/use-cases/post-squad-use-case'

export class DbPostSquad implements PostSquad {
  constructor(private readonly postSquadRepository: PostSquadRepository) {}
  async post(squad: Squad): Promise<Squad> {
    return await this.postSquadRepository.post(squad)
  }
}
