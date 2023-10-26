import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import ApiService from '../common/ApiService';
import UseLogout from './CustomHooks/UseLogout';

function Login() {
    const [email, setMail] = useState("")
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const logOut=UseLogout
    const loginVerify = async (e) => {
        e.preventDefault();
        const res = await ApiService.post('/login', {
            mail: email,
            password: password
        })
        try {
            if (res.status == 200) {
                toast.success("login success")
                sessionStorage.setItem('token',res.data.token)
                navigate('/dashboard')
            }
        } catch (error) {
            if(error.response.data.status===400){
                toast.error('Invalid user')
                logOut()
            }else{
                toast.error(error.response.data.message);
                logOut()
            }
        }
       
    }
    return (
        <>
            <form className='loginForm'>
                <div className="form-floating login-box mb-3">
                    <input type="email" className="form-control box-size"
                        id="floatingInput" placeholder="name@example.com" onChange={(e) => setMail(e.target.value)} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating  mb-3">
                    <input type="password" className="form-control box-size"
                        id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className='for-crt-link mb-3'>
                    <Link style={{ textDecoration: 'none' }} to='/forget'>forget password</Link>
                    <Link style={{ textDecoration: 'none' }} to='/createuser'>SignUp</Link>
                </div>

                <div className="d-grid">
                    <button className="btn box-size btn-lg btn-primary 
                    btn-login text-uppercase fw-bold mb-2 box-size"
                        onClick={(e) => loginVerify(e)}
                    >
                        Sign in
                    </button>
                </div>

            </form>

        </>
    )
}

export default Login