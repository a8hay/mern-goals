import express from 'express'
import 'dotenv/config'
import errorHandler from './middlewares/errorMiddleware.js'
import goalRouter from './routes/goalRoutes.js'
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', goalRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
