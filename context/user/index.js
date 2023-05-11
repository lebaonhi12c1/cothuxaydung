import { createContext, useEffect, useState } from "react"


const userContext = createContext()

const UserContext = ( {children})=>{
    const [user,setUser] = useState(null)
    useEffect(()=>{
        localStorage.getItem('user') ? setUser(JSON.parse(localStorage.getItem('user'))) : null
    },[])
    const handleSetUser = value=>{
        setUser(value)
        localStorage.setItem('user',JSON.stringify(value))
    }
    return (
        <userContext.Provider value={{user,handleSetUser}}>
            {children}
        </userContext.Provider>
    )
}
export {userContext}
export default UserContext

