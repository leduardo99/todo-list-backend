import { Router } from 'express'
import TodoController from '@/http/controllers/todo.controller'

const router = Router()

router.get('/:id', TodoController.getById)
router.get('/', TodoController.get)
router.post('/', TodoController.create)
router.delete('/:id', TodoController.delete)
router.patch('/:id', TodoController.update)
router.patch('/:id/done', TodoController.toggleDone)

export default router
