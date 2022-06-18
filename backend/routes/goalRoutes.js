import express from 'express'
import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from '../controllers/goalController.js'
import { protect } from '../middlewares/authMiddleware.js'

const goalRouter = express.Router()

goalRouter.get('/', protect, getGoals)

goalRouter.post('/', protect, setGoal)

goalRouter.put('/:id', protect, updateGoal)

goalRouter.delete('/:id', protect, deleteGoal)

export default goalRouter
