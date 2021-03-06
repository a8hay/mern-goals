import expressAsyncHandler from 'express-async-handler'
import { Goal } from '../models/goalModel.js'
import { User } from '../models/userModel.js'

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = expressAsyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id })
  res.status(200).json(goals)
})

// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoal = expressAsyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  const goal = await Goal.create({ text: req.body.text, user: req.user.id })
  res.status(201).json(goal)
})

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = expressAsyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const user = await User.findById(req.user.id)
  // check for user
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // make sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorised')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedGoal)
})

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = expressAsyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const user = await User.findById(req.user.id)
  // check for user
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // make sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorised')
  }

  await goal.deleteOne()
  res.status(200).json({ id: req.params.id })
})

export { getGoals, setGoal, updateGoal, deleteGoal }
