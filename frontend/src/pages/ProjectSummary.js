
import React, { useEffect, useRef,useState ,useContext} from 'react'

import useFetch from '../hooks/useFetch'

import { useParams } from 'react-router-dom'

import { BASE_URL } from '../utils/config'
import { AuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

function ProjectSummary() {

    const {id} = useParams()
    console.log(id)
  const navigate = useNavigate()
  const reviewMsgRef=useRef();
  const [tourRating,setTourRating]=useState(null);
  const {user}=useContext(AuthContext)
  const { data : job,loading,error} = useFetch(`${BASE_URL}/projects/${id}`)
  console.log(job);
  

  const [credentials,setCredentials]=useState({
    proposal:'',
    jobId:id,
    job:id,
    applicantId:user._id,
    userEmail:user.email,
    bid:''

  })

  const handleChange=e=>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    // console.log(credentials)
  }

  const handleClick=async e=>{
    // console.log(credentials)

    e.preventDefault();
    try{
      const res= await fetch(`${BASE_URL}/applicant/${id}`,{
        method:"post",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(credentials)
      })
      console.log(res)

      const result = await res.json()

      if(!res.ok){
        alert('fail')
      }else{
      alert('applied successfully')
      navigate('/home')}
    }catch(e){
      alert(e.message)
    }
  }

//   const {photo,title,desc,price,reviews,city,distance,maxgroupSize}=tour

//   const {totalRating,avgRating}=calculateAvgRating(reviews)

//   const options={day:'numeric',month:'long',year:'numeric'}
  return (
    <div style={{width:'95%'}}>
                     <input
          id="proposal"
          // label={questionAnswer.question}
          placeholder='Write an appealing proposal to increase your chances'
        //   onChange={handleChangeInput}
          className="large-input"
          onChange={handleChange}
        />
                       <input
          id="bid"
          // label={questionAnswer.question}
          placeholder='Your work value in rupees'
        //   onChange={handleChangeInput}
          className="small-input"
          onChange={handleChange}
        />
                       {/* <input
          id="highestRange"
          // label={questionAnswer.question}
          placeholder='Maximum range'
        //   onChange={handleChangeInput}
          className="small-input"
          onChange={handleChange}
        /> */}

<button className="block py-3 px-4 font-medium text-center text-white " onClick={handleClick}>
                                    <button class="comic-button">Apply</button>
                                    </button>
    </div>
  )
}

export default ProjectSummary