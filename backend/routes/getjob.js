import express from 'express'
import { createApplication } from '../controllers/applicantController.js'
import { verifyUser } from '../utils/verifyToken.js'
import { getJobApplicants, getJobByUseId } from '../controllers/jobController.js'

const router = express.Router()
console.log('inside route')
router.get('/:userId',getJobByUseId)
router.get('/job/:jobId',getJobApplicants)

// router.post('/:tourId',c)



export default router