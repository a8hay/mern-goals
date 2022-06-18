import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please enter firstName'],
    },

    email: {
      type: String,
      required: [true, 'Please enter email'],
      unique: true,
    },

    password: {
      type: String,
      required: [true, 'Please enter password'],
    },
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

export { User }
