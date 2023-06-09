import { PrismaTodosRepository } from '@/repositories/prisma-todos.repository'
import { TodosService } from '@/services/todos.service'
import { Request, Response } from 'express'
import { z } from 'zod'

class TodoController {
  async create(request: Request, response: Response) {
    const registerBodySchema = z.object({
      title: z.string(),
      description: z.string().optional(),
    })

    const body = registerBodySchema.parse(request.body)

    try {
      const todosRepository = new PrismaTodosRepository()

      const todosService = new TodosService(todosRepository)

      const todo = await todosService.create(body)

      return response.status(201).send(todo)
    } catch (error) {
      return response.status(409).send()
    }
  }

  async getById(request: Request, response: Response) {
    const { id } = request.params

    const todosRepository = new PrismaTodosRepository()

    const todosService = new TodosService(todosRepository)

    const todo = await todosService.getById(Number(id))

    return response.json(todo)
  }

  async get(request: Request, response: Response) {
    const todosRepository = new PrismaTodosRepository()

    const todosService = new TodosService(todosRepository)

    const todos = await todosService.get()

    return response.json(todos)
  }

  async delete(request: Request, response: Response) {
    const todosRepository = new PrismaTodosRepository()

    const todosService = new TodosService(todosRepository)

    await todosService.delete(Number(request.params.id))

    return response.status(204).send()
  }

  async update(request: Request, response: Response) {
    const { id } = request.params

    const updateBodySchema = z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      isDone: z.boolean().optional(),
    })

    const body = updateBodySchema.parse(request.body)

    const todosRepository = new PrismaTodosRepository()

    const todosService = new TodosService(todosRepository)

    const todo = await todosService.update(Number(id), body)

    return response.json(todo)
  }

  async toggleDone(request: Request, response: Response) {
    const { id } = request.params

    const todosRepository = new PrismaTodosRepository()

    const todosService = new TodosService(todosRepository)

    const todo = await todosService.toggleDone(Number(id))

    return response.json(todo)
  }
}

export default new TodoController()
