export interface Controller {
  handle(): Promise<unknown>
}
