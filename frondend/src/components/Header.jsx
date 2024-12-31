import React, { useState } from 'react'
import Logo from './Logo'
import { IoSearchSharp } from "react-icons/io5"
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import SummaryApi from '../common';
import { setUserDetails } from '../store/userSlice';


const Header = () => {

  const user = useSelector(state => state?.user?.user)
  const dispath = useDispatch();
  const [menuDisplay, setmenuDisplay]=useState(false)

  console.log("user header",user);

  const handleLogout =async()=>{
    const fetchData = await fetch(SummaryApi.logout_user.url,{
      method : SummaryApi.logout_user.method,
      credentials : 'include'
    })

    const data =await fetchData.json()

    if(data.success){
      toast.success(data.message)
      dispath(setUserDetails(null))
    }
    if(data.error){
      toast.error(data.message)
    }
  }

  return (
  <header className='h-16 shadow-md bg-white'>
<div className='h-full container mx-auto flex items-center px-4 justify-between'>
    <div className=''>
        <Link to={"/"} ><Logo w={90} h={50} /></Link>
  
</div>
<div className=' hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
    <input type='text' placeholder=' search product here...' className='w-full outline-none '/>
    <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
          <IoSearchSharp/>
    </div>
</div>
<div className='flex items-center gap-7'> 
   <div className='relative flex justify-center'>
         <div className='text-3xl cursor-pointer relative flex justify-center' onClick={()=>setmenuDisplay(prev => !prev)}>
            {
              user?.profilepic?
              (
                <img src={user?.profilepic} className='w-10 h-10 rounded-full' alt={user.name}/>
              ):(
              <FaUserCircle/> 
              )
            }
    
        </div>
        {
          menuDisplay &&(
            <div className='absolute bg-white bottom-0 top-11 h-fit p-4 shadow-lg rounded '>
          <nav>
            <Link to={"admin-panel"} className='whitespace-nowrap hover:bg-slate-100 p-2' onClick={()=>setmenuDisplay(prev => !prev)}>Admin Panel</Link>
          </nav>
          
        </div>
          )
        }

        
   </div>
 <div className='text-2xl cursor-pointer relative'>
     <span><FaShoppingCart/></span>
   <div className='bg-red-600 text-white w-4 h-5 p-1 rounded-full flex items-center justify-center absolute -top-2 -right-3'>
   <p className='text-sm'>0</p>
    </div>

</div>
<div>
{
  
  user?._id ?
  (
    <button onClick={handleLogout}  className='px-3 py-1 bg-red-600 text-white rounded-full hover:bg-red-700'>Logout</button>
  ):
  (
    <Link to={"/Login"}  className='px-3 py-1 bg-red-600 text-white rounded-full hover:bg-red-700'>Login</Link>
)
}
</div>
</div>

</div>    

    </header>


  )
}

export default Header