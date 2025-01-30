import { useState,useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Auth/Login'
import Employee from './components/Dashboard/Employee'
import Admin from './components/Dashboard/Admin'
import { GetLocalStoage, SetLocalStoage } from './utils/Localstorage'
import { AuthContext } from './context/AuthProvider'


function App() {

  // useEffect(() => {
  //   //  SetLocalStoage()
  //   GetLocalStoage()
  //  }, [])
  

 
  
  
   const [user, setUser] = useState(null)
   const [loggedInUser, setLoggedInUser] = useState(null)
  //  const [UserData,setUserData]=useContext(AuthContext)
  // const [authData]=useContext(AuthContext)
  const  [userData]  = useContext(AuthContext);
  
   useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedInUser',"")
    // console.log(loggedInUser)
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUser(userData.data)
    }
   },[])


  //  useEffect(() => {
  //   if(authdata){
  //     const loggedInUser=localStorage.getItem('loggedInUser')
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
     
  //  }, [authdata])
   
  //  console.log(authdata.employees)
  //  console.log(Authdata.employees.find((e)=>email==e.email && password==e.password))
    
    
  //  const handleLogin=(email,password)=>{
  //   if(email=='admin@me.com' && password=='123'){
  //     setUser('admin')
      
  //     // console.log("admin")
  //   }else if (authdata && email==authdata.employees.email && password==authdata.employees.password) {
  //     setUser("employee")
      
  //     // console.log("user")
  //   } else {
  //     alert("invalide email or password")
  //   }
  //  }

  const handleLogin = (email, password) => {
    console.log(userData)
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      // Admin successfully logged in
    } else if (userData && Array.isArray(userData)) {
      const employee = userData.find(
        (emp )=> emp.email.toLowerCase().trim() === email.toLowerCase().trim() && emp.password === password
      );
      console.log("Matching Employee:", employee);
      if (employee) {
        setUser('employee');
        setLoggedInUser(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}));
        // Employee successfully logged in
      } else {
        alert('Invalid email or password');
      }
    } else {
      alert('Invalid email or password');
    }
  };
  
  
  //  const data=useContext(AuthContext)
  //  console.log(data)

  return (
    < >
    {!user ? (
  <Login handleLogin={handleLogin} />) : user === 'admin' ? (<Admin changeUser={setUser} />) : user === 'employee' ? (<Employee changeUser={setUser} data={loggedInUser}  />) : null}
    {/* {!user ? <Login handleLogin={handleLogin}/> : '' }
    {user=='admin' ? <Admin/> : <Employee/>} */}
    {/* <login/> */}

    {/* <Employee/> */}
    {/* <Admin/> */}
    </>
  )
}

export default App
