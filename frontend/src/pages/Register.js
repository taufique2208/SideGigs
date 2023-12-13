import React from 'react';
import './Register.css';
// import React from 'react'
import { useState,useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { Container,Row,Col,Form,FormGroup,Button } from 'reactstrap'
// import './Login.css'
// import registerImg from'../assets/images/register.png'
// import userIcon from'../assets/images/user.png'
import { AuthContext } from '../context/authContext'
import { BASE_URL } from '../utils/config'
import { Navigate,useNavigate } from 'react-router-dom'

function Register() {
  const navigate=useNavigate()
  const [credentials,setCredentials]=useState({
    username:'',
    email:'',
    password:'',
  })

  const {dispatch} = useContext(AuthContext)
  

  const handleChange=e=>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    console.log(credentials)
  }

  const handleClick=async e=>{
    console.log(credentials)

    e.preventDefault();
    try{
      const res= await fetch(`${BASE_URL}/auth/register`,{
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
      dispatch({type:'REGISTER_SUCCESS'})
      navigate('/login')}
    }catch(e){
      alert(e.message)
    }
  }


  return (
    
    <div className='form-wrapper'><form className="form">
    <div className="title-name">
      Welcome,<br />
      <span>Register to continue</span>
    </div>
    <div className='input-wrapper'>
    <input className="input" name="email"  id='username' placeholder="User Name" type="email" onChange={handleChange} />
    <input className="input" name="email"  id='email' placeholder="Email" type="email"  onChange={handleChange} />
    {/* <input className="input" name="password" id='password'  placeholder="Phone Number" type="text" /> */}
    <input className="input" name="password" placeholder="Password" id='password' type="password" onChange={handleChange} />
    {/* <input className="input" name="confirm-password" placeholder="Confirm Password" type="password" /> */}
    </div>
    <button className="button-confirm bg-blue-400" onClick={handleClick}>Let's go →</button>
    
    <div className="login-with">
      {/* <div className="button-log"><b>t</b></div> */}
      <div className='title'>or</div><br></br>
      <div className='input-wrapper'>
      <div className="button-log">
        <button>
          <img src={require('../assets/google.png')}></img>
        </button>
      </div>
      </div>
      {/* <div className="button-log"> */}
        {/* <svg className="icon" height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> */}
          {/* <path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z"></path> */}
        {/* </svg> */}
      {/* </div> */}
    </div>
  </form>
  </div>
  );
}

export default Register;
