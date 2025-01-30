import React from 'react'
import Accepttask from './Accepttask'
import Newtask from './Newtask'
import CompleteTask from './CompleteTask'
import Failedtask from './Failedtask'


const Tasklist = ({data}) => {
  return (
    <div id='Tasklist' className='mt-[3vw]  w-full h-[52%] flex items-center justify-start gap-7  flex-nowrap overflow-auto'>
        {data.tasks.map((elem,index)=>{
            if(elem.active){
                return <Accepttask key={index} data={elem}/>
            }
            if(elem.newTask){
                 return <Newtask key={index} data={elem}/>
             }
            if(elem.completed){
                 return <CompleteTask key={index} data={elem}/>
             }
            if(elem.failed){
                return <Failedtask key={index} data={elem}/>
            }
        })}
        
        
        
      
       
        
    </div>
  )
}

export default Tasklist