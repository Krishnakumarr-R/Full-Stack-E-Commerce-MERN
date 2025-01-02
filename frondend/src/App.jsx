import { useEffect } from 'react'
import Header from './components/Header'
import './App.css'
import { Outlet } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SummaryApi from './common'
import Context from './context'
import { useDispatch } from 'react-redux'
import { setUserDetails  } from './store/userSlice'

function App() {

    const dispath = useDispatch()
    const fetchUserDetails = async()=>{
      
      const dataResponse = await fetch(SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials:'include'
    })
    const dataApi= await dataResponse.json()

    if(dataApi.success){
      dispath(setUserDetails(dataApi))
    }

   
   }
   
   useEffect(()=>{
  
    fetchUserDetails();
    
    },[])


  


  return (
    
    <>
    <Context.Provider value={{
        fetchUserDetails
    }} >
    <ToastContainer/>
    <Header/>
    <main className='min-h-[calc(100vh-120px)]'>
      <Outlet/>
      </main>
    </Context.Provider>
    </>
  )
}

export default App
