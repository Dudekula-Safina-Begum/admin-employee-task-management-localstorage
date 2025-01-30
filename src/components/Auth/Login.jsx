import React, { useState } from 'react'


const Login = ({handleLogin}) => {
    // console.log(handleLogin)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submithandle=(e)=>{
        e.preventDefault()

        handleLogin(email,password)
        // console.log("mail",mail)
        // console.log("password",password)
        setemail('')
        setpassword('')
    } 
     

  return (
    <div className='flex items-center bg-zinc-800 justify-center w-screen h-screen'>
        <div className='border-2 border-zinc-500 rounded-2xl p-[1vw]'>
            <form onSubmit={(e)=>{
                submithandle(e)
            }} className='flex flex-col p-[3vw]' >
            <input 

             value={email}
             onChange={(e)=>{setemail(e.target.value)}}
             required type="email" className='outline-none border-2 text-white  border-zinc-600 bg-transparent rounded-full px-5 py-3 ' placeholder='Enter mail ID' />
            <input value={password} onChange={(e)=>{setpassword(e.target.value)}} required type="password" className='outline-none border-2 text-white  border-zinc-600 bg-transparent  px-5 py-3 rounded-full mt-[2vw]' placeholder='Enter password' />
            <button className='mt-5 border-2 border-zinc-600 bg-zinc-300  px-5 py-3 rounded-full text-zinc-900'>LOG IN</button>
            </form>
           
        </div>
    </div>
  )
}

export default Login