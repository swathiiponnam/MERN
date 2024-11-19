import React, { useState } from 'react'

function LoginWithoutFormik() {

    const [userDetails,setUserDetails] = useState({
        username: "",
        email : "",
        password :""
    })

    const {username,email,password} = userDetails

    const handleChange = (e)=>{
        // setUserDetails(e.target.value)
        let {name,value} = e.target
        setUserDetails({...userDetails,[name] : value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='bg-slate-400 w-[50%] border m-auto p-2'>
                <div className='w-[90%] m-auto'>
                    <h1 className='font-bold m-auto p-4'>Login page without Formik</h1>
                    <div>
                        <label className='p-2'> Username: </label>
                        <input className='p-2 m-2 border-collapse rounded-md' type="text" name='username'
                        value={username} onChange={handleChange}/>
                    </div>
                    <div>
                        <label className='p-2'> email: </label>
                        <input className='p-2 m-2 border-collapse rounded-md' type="text" name="email"
                        value={email} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='p-2'> Password : </label>
                        <input className='p-2 m-2 border-collapse rounded-md' type="text" name="password" 
                        value={password} onChange={handleChange}/>
                    </div>
                    <button className='bg-green-600 p-3 ml-36 border-collapse rounded-lg' type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default LoginWithoutFormik