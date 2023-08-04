export interface FindRepository<Model> {
  findAll(params?: any): Promise<Model[] | Model>
  findById(id: string, params?: any): Promise<Model | null>
}
