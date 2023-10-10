import express from 'express'
import cors from 'cors'

import weatherRouter from './routes/weather'
import componentRouter from './routes/component';

const app = express()
app.use(express.json()) // transform req.body to JSON

// Enable CORS for all routes
app.use(cors());

const PORT = 1337

app.use('/api/component', componentRouter)
app.use('/api/weather', weatherRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})