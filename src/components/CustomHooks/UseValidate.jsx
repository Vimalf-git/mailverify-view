import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserDetailContext } from '../userDetailContext';
import ApiService from '../../common/ApiService';

function UseValidate({ children }) {
  // const { OTP, setOTP } = useContext(UserDetailContext);
  let [data,setData]=useState([])
  let [searchParam, setSearchparam] = useSearchParams();
  // const id = useSearchParams('id');
  const token = searchParam.get('emailtoken');
  const id = searchParam.get('id');
  console.log(id);
  console.log(token);

  const getData = async () => {

    try {
      let res = await ApiService.get(`/forgetpass/getres/${id}/${token}`)
      // console.log(res.data.OTP);
      // console.log(OTP + "-->" + "otp");
      if (res.status === 200) {
        console.log("hi");
        setData(res.data)
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(error.response.message)
      } else {
        toast.error(error.response.message)
      }
    }
    // return res.data.OTP;
  }
  useEffect(() => {
    getData();
  }, [])

  console.log(data.OTP);
  if (!data) {
    toast.error('please try again some times')
  }
let check=data.OTP
  return (

    check ? children
      : <Navigate to='/forget' />

  )
}

export default UseValidate