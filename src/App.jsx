import { useState , useEffect } from 'react'
// import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout} from './store/authSlice'
import {Header , Footer} from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading , setLoading] = useState(true)
  const dipatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) {
        //console.log("Hello1");
        dipatch(login(userData));
      }
      else {
        console.log("Hello2" , userData);
        
        dipatch(logout(userData));
      }
    })
    .finally(() => setLoading(false));
  } , [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
          <main>
            <Outlet/>
          </main>
        <Footer/>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <p className="text-lg font-semibold text-gray-700">Loading...</p>
    </div>
  );
}

export default App
