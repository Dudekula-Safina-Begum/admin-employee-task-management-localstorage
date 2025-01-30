import React, { createContext, useEffect, useState } from 'react'
import { GetLocalStoage, SetLocalStoage } from '../utils/Localstorage'
// import { GetLocalStoage } from '../utils/Localstorage'
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
      //  localStorage.clear()
    const [userData, setUserData] = useState(null)

    

   useEffect(() => {
    SetLocalStoage()
     const {employees}=GetLocalStoage()
     
     setUserData(employees)
     
   

   }, [])
   

  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider