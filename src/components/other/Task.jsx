import React from 'react'

const Task = ({data}) => {
     
 
  return (
    <div className='mt-[3vw] flex gap-5'>
        <div className='w-[30%] bg-yellow-400 p-[5vh] rounded-md'>
             <h2 className='text-lg font-semibold'>{data.taskCounts.newTask}</h2>
             <h3 className='text-lg font-bold'>New Task</h3>
        </div>
        <div className='w-[30%] bg-green-400 p-[5vh] rounded-md'>
             <h2 className='text-lg font-semibold'>{data.taskCounts.completed}</h2>
             <h3 className='text-lg font-bold'>Completed Task</h3>
        </div>
        <div className='w-[30%] bg-blue-400 p-[5vh] rounded-md'>
             <h2 className='text-lg font-semibold'>{data.taskCounts.active}</h2>
             <h3 className='text-lg font-bold'>Active Task</h3>
        </div>
        <div className='w-[30%] bg-red-400 p-[5vh] rounded-md'>
             <h2 className='text-lg font-semibold'>{data.taskCounts.failed}</h2>
             <h3 className='text-lg font-bold'>Failed Task</h3>
        </div>
    </div>
  )
}

export default Task