import express from 'express'
import { createJob } from '../controllers/jobController.js'
import { verifyUser } from '../utils/verifyToken.js'

const router = express.Router()
console.log('inside router')
router.post('/',createJob)

// router.get('/',getAllJob)
// router.get('/:id',getSingleJob)

// router.post('/:tourId',c)



export default router