import expressAsyncHandler from 'express-async-handler'

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: 'get goals' })
})

// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoal = expressAsyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  } else {
    res.status(200).json({ message: 'set goal' })
  }
})

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goal with id ${req.params.id}` })
})

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goal with id ${req.params.id}` })
})

export { getGoals, setGoal, updateGoal, deleteGoal }
