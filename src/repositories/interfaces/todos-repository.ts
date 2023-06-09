import { Prisma, Todo } from '@prisma/client'

export interface TodosRepository {
  toggleDone(id: number): Promise<void>
  create(data: Prisma.TodoCreateInput): Promise<Todo>
  getById(id: number): Promise<Todo | null>
  get(): Promise<Todo[]>
  delete(id: number): Promise<void>
  update(id: number, data: Prisma.TodoUpdateInput): Promise<Todo>
}
