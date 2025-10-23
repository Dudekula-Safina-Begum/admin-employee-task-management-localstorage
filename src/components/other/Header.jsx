import React from 'react'
import Login from '../Auth/Login'
// import { useHistory } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


const Header = (props) => {
  // console.log(get)
  console.log(props.changeUser)
  // console.log(props)
  
  // const username = data?.name || 'username';
  // console.log()
  // const [username, setUsername] = useState("")
  // if(!data){
  //   setUsername('Admin')
  // }else{
  //    setUsername(data.name)
  // }
  // console.log(data)

  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
    // console.log(props.changeUser);
    // window.location.reload()
   
    

  }

  return (
    <div className=''>
        <div className='w-full text-zinc-100  flex justify-between items-center  text-xl'>
            <h1 className='font-medium'>Hello <br /> <span className='font-semibold'> welcome to your DashBoard</span></h1>
            <button onClick={logOutUser} className='font-medium rounded-md bg-red-500 p-3'>LOG-OUT</button>
        </div>
    </div>
  )
}

export default Header