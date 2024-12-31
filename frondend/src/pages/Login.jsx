import React, { useContext, useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link , useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import SummaryApi from '../common';
import Context from '../context';


const Login = () => {
    const [showPassword,setShowPassword]=useState(false);
    const [data,setData] = useState({
        email : "",
        password : ""
    })
    
    const navigate = useNavigate();
    const {fetchUserDetails} = useContext(Context);

    

    const handleOnChange = (e) =>{
        const { name , value } = e.target

        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }
    
    const handleSubmit = async(e)=>{
        e.preventDefault()
            
        const dataResponse = await fetch(SummaryApi.signIn.url,{
            method : SummaryApi.signIn.method,
            credentials : 'include',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
          })

        
        const dataApi = await dataResponse.json();
        
       
        

        if(dataApi.success){
            toast.success(dataApi.message)
            navigate('/')
            fetchUserDetails()
        }

        if(dataApi.error){
            toast.error(dataApi.message)
        }
       
    }
    

  return (
    <section id='Login'>
        <div className='mx-auto container p-5 pt-10 '>

            <div className='bg-white  p-5  py-5 w-full max-w-md mx-auto shadow-lg '>
                <div className='w-20 h-20 mx-auto'>
                    <img src={loginIcons} alt='login icons'/>
                </div>
                <form  className='pt-5' onSubmit={handleSubmit}>
                    <div className='grid'> 
                        <label>Email:</label>
                    <div className='bg-slate-100 p-2'>
                        <input 
                        type='email' 
                        placeholder='Enter email'
                        name='email'
                        value={data.email}
                        onChange={handleOnChange}
                         className='w-full h-full outline-none bg-transparent'/>
                    </div>
                    </div>
                    <div >
                        <label>Password:</label>
                    <div className='bg-slate-100 p-3 flex'>
                        <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder='Enter password'
                        value={data.password}
                        name='password' 
                         onChange={handleOnChange}
                          className='w-full h-full outline-none bg-transparent'/>
                        <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                    </span>
                                </div>
                               
                    </div>
                    <Link to={'/forgot-password'} className='block w-fit ml-auto text-blue-600 hover:underline hover:text-blue-900'>
                                Forgot password ?
                            </Link>
                    
                    </div>
                    <div className='items-center justify-center'>
                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>
                    </div>
                    
                </form>
                <p className='my-5'>Don't have an account ? <Link to={'/signup' } className='hover:underline text-blue-600 hover:text-blue-900'>Sign up</Link></p>
            </div>
        </div>
      
    </section>
  )
}

export default Login