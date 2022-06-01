export interface DeleteSquad {
  delete: (squadId: string) => Promise<boolean>
}
