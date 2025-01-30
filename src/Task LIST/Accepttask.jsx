import React from 'react'

const Accepttask = ({data}) => {
  console.log()
  return (
    
        <div className='flex-shrink-0 h-full bg-blue-400 w-[22vw] px-[2vw] rounded-xl '>
            <div className='flex  items-baseline justify-between  py-[1.5vw]'>
                <h3 className='text-sm font-semibold bg-red-600  p-[0.5vw] rounded-md'>{data.category}</h3>
                <h4 className='text-sm font-semibold'>{data.date}</h4>
            </div>
            <h2 className='mt-[1vw] font-bold text-xl'>{data.title}</h2>
            <p className='tetx-sm mt-2'>{data.description}</p>
            <div className='flex justify-between mt-4 gap-2 '>
                
            <button className='bg-green-400 py-1 px-2 text-sm rounded-md border-2 border-green-500'>Mark as Completed</button>
            <button className='bg-red-400 py-1 px-2 text-sm rounded-md border-2 border-red-500'>Mark as Failed</button>
            </div>
        </div>
    
  )
}

export default Accepttask