import express from 'express'
import * as weatherComponent from '../services/componentServices'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(weatherComponent.getWeatherComponent())
})

export default router