import React from 'react'
import Header from '../other/Header'
import CreatTask from '../other/CreatTask'
import AllTask from '../other/AllTask'

const Admin = (props) => {
  console.log(props)
  return (
    <div className='bg-zinc-800 w-full h-screen p-[2vw] '>
          <Header changeUser={props.changeUser}/>
          <CreatTask/>
          <AllTask/>
        
    </div>
  )
}

export default Admin