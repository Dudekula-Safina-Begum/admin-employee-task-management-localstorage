import React, { useState,useEffect } from 'react'
import Header from '../other/Header'
import Task from '../other/Task'
import Tasklist from '../../Task LIST/Tasklist'

const Employee = (props) => {
  // const [get, setGet] = useState(localStorage.getItem('employees'))
  // // console.log(get)

  // useEffect(() => {
  //  setGet(localStorage.getItem('employees'))
  // }, [])
  
  // const getting=localStorage.getItem('employees')
  // console.log(getting)
  // console.log(props.changeUser)
  // const [employees, setEmployees] = useState([]);
  // useEffect(() => {
  //   // Fetch employee data from localStorage when the component mounts
  //   const data = JSON.parse(localStorage.getItem("employees")) || [];
  //   setEmployees(data); // Set the data in state
  // }, []);
  // const refreshEmployees = () => {
  //   const updatedData = JSON.parse(localStorage.getItem("employees")) || [];
  //   setEmployees(updatedData);
  // };
  
// setEmployees(updatedData);
  // console.log(data)
  return (
    <div className='bg-zinc-800 w-full h-screen p-[2.5vw] justify-between'>
        <Header changeUser={props.changeUser} data={props.data}  />
        <Task data={props.data}   />
        <Tasklist data={props.data}  />
    </div>
  )
}

export default Employee