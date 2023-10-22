import { Button } from 'react-bootstrap'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Forget() {
  const [mail,setMail]=useState("")
const navigate=useNavigate()
  const mailSend=async()=>{
   await axios.post('https://mailverifybe.onrender.com/forgetpass',{email:mail})
   const forgetFalg= await axios.post('http://localhost:8000/forgetpass',{email:mail})

   if(forgetFalg.data.otp){
    navigate('/resetpassword')
   }
  }
  return (
    <>
    <div className='forget_com'>
    <input type='text' placeholder='enter your mail' onChange={(e)=>setMail(e.target.value)}/>
    <Button onClick={()=>{mailSend()}}>send</Button>
    </div>
   
    </>
  )
}

export default Forget