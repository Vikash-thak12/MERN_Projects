import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useLogout = () => {

    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()
    const logout = async () => {
        setLoading(true)
        try {
            const res = await fetch("http://localhost:8000/api/auth/logout", {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            })
            const data = await res.json()
            if(data.error) {
                throw new Error(data.error)
            }
            localStorage.removeItem("chat-user")
            setAuthUser(null)
            toast.success("User Logged out Successfully")
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return {loading, logout}
}

export default useLogout
