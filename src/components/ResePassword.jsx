import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom'
import { UserDetailContext } from './userDetailContext';
import ApiService from '../common/ApiService';
import { toast } from 'react-toastify';

function ResePassword() {
  const navigate=useNavigate();
  const [OTP, setOTP] = useState();
  // const[mail,setMail]=useState("");
  // const [pass, setPass] = useState("");
  // console.log(token);
  const { mail, setMail, pass, setPass } = useContext(UserDetailContext)
  // let id=param.id;
  // let token=param.token;
  // console.log(param);
  const [searchParam, setSearchparam] = useSearchParams();
  // const id = useSearchParams('id');
  const token = searchParam.get('emailtoken');
  const id = searchParam.get('id');
  // console.log(id);
  const getData = async () => {
    let res = await ApiService.get(`forgetpass/getres/${id}/${token}`)
    setMail(res.data.mail)
    setOTP(res.data.OTP)
  }

  // console.log(mail);
  // console.log(OTP);
  useEffect(() => {
    // console.log("active useEffect");
    getData();
  }, [])
  const changePassword = async (e) => {
    e.preventDefault()
   
    try {
      const res= await ApiService.post('/forgetpass/updatepassword', {
        email: mail,
        password: pass
      })
      if(res.status===200){
        toast.success('Password changed');
        setPass(" ")
        navigate('/')
      }   
    } catch (error) {
      if(error.response.data.status===400){
        toast.error('Invalid user')
      }else{
        toast.error(error.response.data.message);
      }
    }
  }
  return (<>
    {
      OTP ?
        <form className='reset-form ' >
          <div className='reset-input form-floating'>
            <input type='text' className='form-control' value={pass}
              onChange={(e) => setPass(e.target.value)} />
            <label className='floatingInput'>Enter new password</label>
            <Button onClick={(e) => changePassword(e)}>change</Button>
          </div>

        </form>
        :
        <>
          <p>Invalid verification</p>
        </>
    }
  </>
  )
}

export default ResePassword