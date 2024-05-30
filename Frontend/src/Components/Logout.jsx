import React from 'react'
import { useAuth } from '../context/AuthNew'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser, setAuthUser] = useAuth()
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success('Login Succesful!');
            setTimeout(()=>{
                window.location.reload(); //helps to refresh page
            },3000)
        } catch (error) {
            toast.error("Error :" + error);
            setTimeout(()=>{},2000)
        }
    }
  return (
    <div className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}><button>Logout</button></div>
  )
}

export default Logout