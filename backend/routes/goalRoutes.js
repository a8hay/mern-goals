import express from 'express'
import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from '../controllers/goalController.js'

const goalRouter = express.Router()

goalRouter.get('/', getGoals)

goalRouter.post('/', setGoal)

goalRouter.put('/:id', updateGoal)

goalRouter.delete('/:id', deleteGoal)

export default goalRouter
