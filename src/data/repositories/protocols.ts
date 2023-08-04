export interface FindRepository<Model> {
  findAll(): Promise<Model[]>
  findById(id: string): Promise<Model | null>
}
