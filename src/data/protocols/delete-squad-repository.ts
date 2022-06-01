export interface DeleteSquadRepository {
  delete: (squadId: string) => Promise<boolean>
}
