import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData,setUserData]=useContext(AuthContext)
    // console.log(authData.employees)
  return (
    <div className='  p-5 rounded-md h-40  '>
        <div className='bg-blue-400 flex items-center justify-between rounded-xl p-2 mb-2'>
            <h2 className='w-[10vw] text-center'>NAME</h2>
            <h2 className='font-semibold w-[10vw] text-center'>ACTIVE TASK</h2>
            <h2 className='w-[10vw] text-center'>NEW TASK</h2>
            
            <h2 className='w-[10vw] text-center'>COMPLETED</h2>
            <h2 className='w-[10vw] text-center'>FAILED</h2>
            
</div>
        
        <div className='h-[80%] overflow-auto '>
        {userData.map(function(e,index){
            return <div key={index} className='bg-red-400 flex items-center justify-between rounded-xl p-2 mb-2 '>
            <h2 className='w-[10vw] text-center bg-red-500'>{e.name}</h2>
            <h2 className='font-semibold w-[10vw] text-center'>{e.taskCounts.active}</h2>
            <h2 className='w-[10vw]text-center'>{e.taskCounts.newTask}</h2>
            
            <h2 className='w-[10vw] text-center'> {e.taskCounts.completed}</h2>
            <h2 className='w-[10vw] text-center'>{e.taskCounts.failed}</h2>
            </div>
        
        

        
        })}
        </div>
        
        
        {/* <div className='bg-blue-400 flex items-center justify-between rounded-xl p-2 mb-2'>
            <h2>Safina Begum</h2>
            <h3>make UI desgin</h3>
            <h5 className='font-semibold'>Status</h5>

        </div>
        <div className='bg-green-400 flex items-center justify-between rounded-xl p-2 mb-2'>
            <h2>Safina Begum</h2>
            <h3>make UI desgin</h3>
            <h5 className='font-semibold'>Status</h5>

        </div>
        <div className='bg-yellow-400 flex items-center justify-between rounded-xl p-2 mb-2'>
            <h2>Safina Begum</h2>
            <h3>make UI desgin</h3>
            <h5 className='font-semibold'>Status</h5>

        </div> */}
    </div>
  )
}

export default AllTask