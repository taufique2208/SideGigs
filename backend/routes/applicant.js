import express from 'express'
import { createApplication } from '../controllers/applicantController.js'
import { verifyUser } from '../utils/verifyToken.js'

const router = express.Router()
console.log('inside rou')
router.post('/:jobId',createApplication)

// router.post('/:tourId',c)



export default router