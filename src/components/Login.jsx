import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <form className='loginForm'>
                <div className="form-floating login-box mb-3">
                    <input type="email" className="form-control box-size" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating  mb-3">
                    <input type="password" className="form-control box-size" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className='for-crt-link mb-3'>
                    <Link style={{textDecoration:'none'}} to='/forget'>forget password</Link>
                    <Link style={{textDecoration:'none'}} to='/'>SignUp</Link>
                </div>

                <div className="d-grid">
                    <button className="btn box-size btn-lg btn-primary btn-login text-uppercase fw-bold mb-2 box-size" >Sign in</button>
                </div>
               
            </form>

        </>
    )
}

export default Login