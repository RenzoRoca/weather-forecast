import express from 'express'
import * as weatherServices from '../services/weatherServices'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(weatherServices.getCitiesWeather())
})

export default router