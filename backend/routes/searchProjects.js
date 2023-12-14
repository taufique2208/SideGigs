import express from 'express'
import { getAllJob,getSingleJob } from '../controllers/jobController.js'
// import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourController.js'
// import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// router.post('/',verifyAdmin,createTour)

// router.put('/:id',verifyAdmin,updateTour)
// 
// router.delete('/:id',verifyAdmin,deleteTour)

router.get('/:id',getSingleJob)

router.get('/',getAllJob)

export default router