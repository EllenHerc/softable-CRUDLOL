import { PostCombatRepository } from 'data/protocols/post-combat-repository'
import { Combat } from 'domain/entities/combat'
import { CreateCombat } from 'domain/entities/create-combat'
import { PostCombat } from 'domain/use-cases/post-combat-use-case'

export class DbPostCombat implements PostCombat {
  constructor(private readonly postCombatRepository: PostCombatRepository) {}
  async post(createCombat: CreateCombat): Promise<Combat> {
    return await this.postCombatRepository.post(createCombat)
  }
}
