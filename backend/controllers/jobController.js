
// import Tour from "../models/Tour.js"
import Job from '../models/Job.js'

export const createJob = async(req,res)=>{
    // const tourId = req.params.tourId
    const newJob = new Job(req.body)
    console.log(newJob)
    console.log('inside')

    try{
        const saveJob = await newJob.save()

        res.status(200).json({success:true,message:'Job uploaded',data:saveJob})
    }catch(e){
        alert(e)
        res.status(500).json({success:false,message:'upload failed'})

    }
}

// export const getSingleJob= async(req,res)=>{
//     const id=req.params.id;
//     try{
//         const tour=await Tour.findById(id).populate('reviews')
//         res.status(200).json({success:true,message:'Successfully found',data:tour})

//     }catch(e){
//         res.status(500).json({success:false,message:'failed to found'})

//     }
// }
export const getAllJob= async(req,res)=>{
    // const page=parseInt(req.query.page);
    // console.log(page)
   
    try{
        const jobs=await Job.find()
        res.status(200).json({success:true,message:'Successfully found',data:jobs})

    }catch(e){
        res.status(500).json({success:false,message:'failed to found'})

    }
}

// export const getJobBySearch=async(req,res)=>{
//     const city=new RegExp(req.query.city,'i')
//     const distance = parseInt(req.query.distance)
//     const maxGroupSize=parseInt(req.query.maxGroupSize)

//     try{
//         const tours = await Tour.find({city,distance:{$gte:distance},maxGroupSize:{$gte:maxGroupSize}}).populate('reviews')
//         res.status(200).json({success:true,count:tours.length,message:'Successfully found',data:tours})
//     }catch(e){
//         res.status(500).json({success:false,message:'failed to found'})
//     }
// }
// export const getFeaturedTour= async(req,res)=>{
//     const page=parseInt(req.query.page);
//     console.log(page)
   
//     try{
//         const tours=await Tour.find({featured:true}).populate('reviews').limit(8)
//         res.status(200).json({success:true,count:tours.length,message:'Successfully found',data:tours})

//     }catch(e){
//         res.status(500).json({success:false,message:'failed to found'})

//     }
// }
