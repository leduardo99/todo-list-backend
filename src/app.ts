import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import routes from './http/routes'

const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/v1', routes)

export default app
