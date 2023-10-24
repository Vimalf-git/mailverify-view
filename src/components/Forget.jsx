import { Button } from 'react-bootstrap'
import React, { useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { UserDetailContext } from './userDetailContext';
import ApiService from '../common/ApiService';
import { toast } from 'react-toastify';
function Forget() {

  const { mail, setMail } = useContext(UserDetailContext)
  // const navigate = useNavigate()
  const mailSend = async () => {
   
   try {
    const res= await ApiService.post('/forgetpass', { email: mail })
    if(res.status===200){
     toast.success('check your mail')
    } 
   } catch (error) {
    if(error.response.data.status===400){
      toast.error('Invalid mail')
    }else{
      toast.error(error.response.data.message);
    }
   }
   
    //  await axios.post('http://localhost:8000/forgetpass', { email: mail })
    // if (forgetFalg.data.otp) {
    //   navigate('/resetpassword')
    // }
      }
  return (
    <>
      <form className='reset-form'>
        <div className='reset-input form-floating'>
        <input type='text'  className='form-control' value={mail}  onChange={(e) => setMail(e.target.value)} />
        <label className='floatingInput'>Enter your mail</label>
        <Button onClick={() =>  mailSend() }>send</Button>
        </div>
      
      </form>

    </>
  )
}

export default Forget