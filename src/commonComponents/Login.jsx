import React, { useState } from 'react'
import { useFormik, validationSchema } from 'formik'
import * as Yup from 'yup'


function Login() {

    const [userData,setUserData] = useState([])
    const initialValues = {
        userName : "",
        email : "",
        password : ""
    }

    const validationSchema = Yup.object().shape({
        userName : Yup.string().required("userName is required"),
        email : Yup.string().email().required("email is mandatory"),
        password : Yup.mixed().required("password is required")
    })

    const handleFormSubmit = (values)=>{
        setUserData([...userData,values])
    }
    const formikDetails = useFormik({
        initialValues,
        validationSchema,
        onsubmit: handleFormSubmit
    })
   
  return (
    <div>
        <form className='p-2 h-56 w-[75%] m-auto flex flex-col border bg-cyan-200 text-indigo-950 border-spacing-2 rounded-lg' onSubmit={formikDetails.handleSubmit}>
            <div className=' m-auto p-2'>
                <label className=''>UserName:  </label>
                <input className=' m-auto p-2 rounded-lg ' type="text"
                        name='userName'
                        value={formikDetails.values.userName}
                        onChange={formikDetails.handleChange}
                        onBlur={formikDetails.handleBlur} />
            </div>
            <div className='p-2 m-auto '>
                <label>Gmail:  </label>
                <input className=' m-auto p-2 rounded-lg ' type="text"
                    name='email'
                    value={formikDetails.values.email}
                    onChange={formikDetails.handleChange} />
            </div>
            <div className='p-2 m-auto '>
                <label>Password: </label>
                <input className=' m-auto p-2 rounded-lg '
                 type="text"
                    name='password'
                    value={formikDetails.values.password}
                    onChange={formikDetails.handleChange} />
            </div>
            <button className='m- 5 p-2 bg-purple-800 text-neutral-50 rounded-md border' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login