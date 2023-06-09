import { prisma } from '@/lib/prisma'
import { Prisma, Todo } from '@prisma/client'
import { TodosRepository } from './interfaces/todos-repository'

export class PrismaTodosRepository implements TodosRepository {
  async delete(id: number): Promise<void> {
    await prisma.todo.delete({ where: { id } })
  }

  async update(id: number, data: Prisma.TodoUpdateInput): Promise<Todo> {
    const todo = await prisma.todo.update({ where: { id }, data })

    return todo
  }

  async get() {
    return prisma.todo.findMany()
  }

  async create(data: Prisma.TodoCreateInput) {
    const todo = await prisma.todo.create({
      data,
    })

    return todo
  }

  async getById(id: number): Promise<Todo | null> {
    return prisma.todo.findUnique({ where: { id } })
  }

  async toggleDone(id: number): Promise<void> {
    const todo = await this.getById(id)

    await this.update(id, { isDone: !todo?.isDone })
  }
}
