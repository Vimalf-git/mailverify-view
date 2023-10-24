import { Formik } from 'formik'
import React from 'react'
import ApiService from '../common/ApiService'
import * as Yup from 'yup'
import { Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function CreateUser() {
const navigate=useNavigate();
    const submitData = async (value) => {
      try {
        const res=  await ApiService.post('/usercreate', value);
        if(res.status===201){
            toast.success('successfully account created')
           
            navigate('/login')

        }
      } catch (error) {
        if(error.response.data.status===400){
            toast.error('User already exist')
        }else{
            toast.error(error.response.data.message);
        }
      }
    }

    const scheme = Yup.object().shape({
        username: Yup.string().required('please enter your username'),
        email: Yup.string().required('please enter your mail'),
        password: Yup.string().required('please enter your password')
    })
    return (

        <div className='container-fluid d-flex justify-content-center allign-items-center'>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: ''
                }}
                onSubmit={(value) => {
                    submitData(value)
                }}
                validationSchema={scheme}
            >
                {({ handleSubmit, handleChange, handleBlur, touched, errors,values}) => (
                     <>
                        <Form onSubmit={handleSubmit} className='d-flex row gap-3'>
                            <Form.Group>
                                <Form.Label>UserName</Form.Label>
                                <Form.Control type='text' value={values.username} name='username' onChange={handleChange}
                                    onBlur={handleBlur} />
                                {errors.username && touched.username ?
                                    <div style={{ color: 'red' }}>{errors.username}</div> : null}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>email</Form.Label>
                                <Form.Control type='text' value={values.email} name='email' onChange={handleChange}
                                    onBlur={handleBlur} />
                                {errors.email && touched.email ?
                                    <div style={{ color: 'red' }}>{errors.email}</div> : ""}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>password</Form.Label>
                                <Form.Control type='password' value={values.password} name='password' onChange={handleChange}
                                    onBlur={handleBlur} />
                                {errors.password && touched.password ?
                                    <div style={{ color: 'red' }}>{errors.password}</div> : ""}
                            </Form.Group>
                            <Button type='submit'>SignUp</Button>
                        </Form>
                    </>
                )}

            </Formik>
        </div>
    )
}

export default CreateUser