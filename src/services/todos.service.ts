import { TodosRepository } from '@/repositories/interfaces/todos-repository'
import { Prisma } from '@prisma/client'

export class TodosService {
  constructor(private todosRepository: TodosRepository) {}

  async create({ title, description }: Prisma.TodoCreateInput) {
    return this.todosRepository.create({ title, description })
  }

  async getById(id: number) {
    return this.todosRepository.getById(id)
  }

  async get() {
    return this.todosRepository.get()
  }

  async delete(id: number) {
    await this.todosRepository.delete(id)
  }

  async update(id: number, data: Prisma.TodoUpdateInput) {
    return this.todosRepository.update(id, data)
  }

  async toggleDone(id: number) {
    return this.todosRepository.toggleDone(id)
  }
}
