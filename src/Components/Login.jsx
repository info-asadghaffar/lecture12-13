import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [userName ,setUserName] = useState()
    const [password ,setPassword] = useState()
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) =>{
      e.preventDefault()
      setUser({userName,password})
    }
  return (
    <div className='mx-auto w-max text-center my-2'>
    <h1>Login</h1>
    <p><input className='border-solid border-2 rounded border-black px-2 m-2' type="text" onChange={(e)=>setUserName(e.target.value)} placeholder='User Name'/></p>
    <p><input className='border-solid border-2 rounded border-black px-2 m-2' type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/></p>
    <button onClick={handleSubmit} className='bg-sky-500 font-medium text-white px-3 py-1 rounded m-1'>Submit</button>

    </div>
  )
}

export default Login