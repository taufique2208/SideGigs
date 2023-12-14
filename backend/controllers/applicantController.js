// import App from "../../frontend/src/App"
import Applicant from "../models/Applicant.js"
import Job from "../models/Job.js"

export const createApplication = async(req,res)=>{
    const jobId = req.params.jobId
    const newApplication = new Applicant({...req.body})
    console.log('inside app')

    try{
        const saveApplication = await newApplication.save()
        console.log(saveApplication)
        await Job.findByIdAndUpdate(jobId,{
            $push:{applicants:saveApplication._id}
        }, { new: true })
        res.status(200).json({success:true,message:'Application submitted',data:saveApplication})
    }catch(e){
        console.log(e)
        console.log('looo')
        res.status(500).json({success:false,message:'Application failed'})

    }
}