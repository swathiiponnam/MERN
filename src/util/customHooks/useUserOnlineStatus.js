import { useState } from "react"

const useUserOnlineStatus = ()=>{
    const [status,setStatus] = useState('')

        window.addEventListener("offline",()=>{
            setStatus(true)
        })

        window.addEventListener("online",()=>{
            setStatus(false)
        })
    return status
}
export default useUserOnlineStatus