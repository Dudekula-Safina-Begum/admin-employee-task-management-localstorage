import React, { useState,useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreatTask = () => {

  const [userData,setUserData]=useContext(AuthContext)

   const [title, setTaskTitle] = useState("")
   const [description, setTaskDescription] = useState('')
   const [date, setTaskDate] = useState('')
   const [asignTo, setAsignTo] = useState('')
   const [category, setCategory] = useState('')

   const [newtask, setNewTask] = useState({})

   

   const submitHandler = (e) => {
    e.preventDefault();
  
    if (!title || !date || !asignTo || !category || !description) {
      alert("Please fill in all fields!");
      return;
    }
  
    const task = {
      title,
      date,
      description,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };
  
    const data = [...userData]; // Ensure immutability
    const assignedEmployee = data.find((elem) => elem.name === asignTo);
  
    if (!assignedEmployee) {
      alert("Employee not found!");
      return;
    }
  
    assignedEmployee.tasks.push(task);
    assignedEmployee.taskCounts.newTask += 1;
  
    setUserData(data);
    localStorage.setItem("employees", JSON.stringify(data));
  
    setAsignTo("");
    setCategory("");
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
  };
  
  

  //  const submitHandler=(e)=>{
  //   e.preventDefault()
  //   // console.log(Title,Date,asignTo,category,Description)
  //    setNewTask({Title,Date,Description,category,active:false,newTask:true,failed:false,completed:false})
  //   //  const data=JSON.parse(localStorage.getItem('employees'))
  //   const data=userData
  //   // //  console.log(userData.employees)
  //   // //  console.log(data)
  //   data.forEach(function(elem){
  //     if(asignTo== elem.name){
  //       elem.tasks.push(newtask)
  //       elem.taskCounts.newTask=elem.taskCounts.newTask+1
  //       console.log(elem.taskCounts.newTask)
        
  //     }
  //   });

    
  //   setUserData(data)
  //   console.log(data)

  //   localStorage.setItem('employees',JSON.stringify(data))

  //   setAsignTo('')
  //   setCategory('')
  //   setTaskTitle('')
  //   setTaskDescription('')
  //   setTaskDate('')


  // }
   
  return (
    <div className='w-full  flex items-center justify-center'>
      <div className=' flex w-full   items-center justify-center p-[2.5vw]'>
        <form onSubmit={(e)=>submitHandler(e)} className=' w-full border-2 border-zinc-600 rounded-lg ' >
          <div className='flex'>
          <div className='w-1/2'>
            <div className='m-[1vw] font-medium '>
              <h3 className='text-white '>Task Title</h3>
              <input 
               
               value={title} onChange={(e)=>{setTaskTitle(e.target.value)}}
              
              className='w-full' type="text" placeholder='make a UI design' />
            </div>

            <div className='m-[1vw] font-medium '>
              <h3 className='text-white'>Date</h3>
              <input 
              value={date} onChange={(e)=>{setTaskDate(e.target.value)}}
              className='w-full' type="date" name="" id="" />
            </div>
            <div className='m-[1vw] font-medium '>
              <h3 className='text-white'>Asign to</h3>
              <input
               
               value={asignTo} onChange={(e)=>{setAsignTo(e.target.value)}}

              className='w-full' type="text" placeholder='Employee name' />
            </div >
            <div className='m-[1vw] font-medium '>
              <h3 className='text-white'>Categogy</h3>
              <input 
              
              value={category} onChange={(e)=>{setCategory(e.target.value)}}
              
              className='w-full' type="text" placeholder='desing,dev ..etc.,' />
            </div>

          </div>
          <div className='w-1/2'><div className='m-[1vw] font-medium '>

            <h3 className='text-white'>Task Title</h3>
            <textarea value={description} onChange={(e)=>{
              setTaskDescription(e.target.value)
            }} className='w-full rounded-md ' placeholder='Desprition' name="" id="" cols="20" rows="5"></textarea>
          </div  >
          </div>
          </div>


          <div className='flex items-center justify-center mb-2'>
            <button className='bg-red-600 py-[1vw] px-[1.5vw] rounded-xl uppercase text-white '>Create Task</button>
          </div>
        </form>
      </div>
    </div >
  )
}

export default CreatTask