import React, { createContext, useContext, useState } from 'react'

export const AuthContext=createContext()
function AuthNew({children}) {
    const initialAuthUser=localStorage.getItem("Users")
    const [authUser,setAuthUser]=useState(
        initialAuthUser?JSON.parse(initialAuthUser):undefined
    )
  return (
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthNew
export const useAuth=()=>useContext(AuthContext)