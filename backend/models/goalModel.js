import mongoose from 'mongoose'

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'please add a text value'],
    },
  },
  { timestamps: true }
)

const Goal = mongoose.model('Goal', goalSchema)
export { Goal }
