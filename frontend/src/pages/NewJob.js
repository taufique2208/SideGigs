import React from 'react'
import './NewJob.css'
import { AuthContext } from '../context/authContext'
import { BASE_URL } from '../utils/config'
import { Navigate,useNavigate } from 'react-router-dom'
import { useState,useContext } from 'react'

function NewJob() {
    const {user,dispatch} = useContext(AuthContext)
    console.log(user._id)
    const navigate=useNavigate()
  const [credentials,setCredentials]=useState({
    jobTitle:'',
    hostId:user._id,
    jobDescription:'',
    skillsRequired:'',
    highestRange:'',
    lowestRange:'',

  })

  const handleChange=e=>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    // console.log(credentials)
  }

  const handleClick=async e=>{
    // console.log(credentials)

    e.preventDefault();
    try{
      const res= await fetch(`${BASE_URL}/newjob`,{
        method:"post",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(credentials)
      })
      console.log(res)

      const result = await res.json()

    //   if(!res.ok){
    //     alert('fail')
    //   }else{
      navigate('/home')
    }catch(e){
      alert(e.message)
    }
  }

//   const {dispatch} = useContext(AuthContext)
  

  return (
    <>
    <div className='form-wrapper'>
    <form>
            <input
          id="jobTitle"
          // label={questionAnswer.question}
        placeholder='Project Title'
        //   onChange={handleChangeInput}
          className="small-input"
          onChange={handleChange}

        />
                    <input
          id="jobDescription"
          // label={questionAnswer.question}
          placeholder='Project Description'
        //   onChange={handleChangeInput}
          className="large-input"
          onChange={handleChange}

        />
                    <input
          id="skillsRequired"
          // label={questionAnswer.question}
          placeholder='Skills Required'
        //   onChange={handleChangeInput}
          className="small-input"
          onChange={handleChange}

        />
                    <input
          id="lowestRange"
          // label={questionAnswer.question}
          placeholder='Minimum range'
        //   onChange={handleChangeInput}
          className="small-input"
          onChange={handleChange}

        />
                    <input
          id="highestRange"
          // label={questionAnswer.question}
          placeholder='Maximum range'
        //   onChange={handleChangeInput}
          className="small-input"
          onChange={handleChange}
        />
                                        <button className="block py-3 px-4 font-medium text-center text-white " onClick={handleClick}>
                                    <button class="comic-button">Post</button>
                                    </button>
        </form>
        </div>
    </>
  )
}

export default NewJob