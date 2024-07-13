import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useLogin = () => {
    const [loading, setLoading] = useState()
    const { setAuthUser } = useAuthContext()

    const login = async (gmail, password) => {
        const success = handleInputErrors({gmail, password})
        if(!success) return false
        setLoading(true)
        try {
            const res = await fetch("http://localhost:8000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ gmail, password })
            })
            // console.log(res)
            const data = await res.json();

            if(!data.success) {
                toast.error(data.Error)
            }
            if(data.success) {
                setTimeout(() => {
                    toast.success(`Welcome back ${data.userDetails.gender === "male" ? "Mr." : "Mrs."} ${data.userDetails.fullname}`)
                }, 1000);

                localStorage.setItem("chat-user", JSON.stringify(data))
                setAuthUser(data)
            }

            // console.log(data.userDetails);

        } catch (error) {
            toast.error(error.Error)
        } finally {
            setLoading(false)
        }
    }

    return { loading, login }
}

export default useLogin


function handleInputErrors({gmail, password}) {
    if(!gmail || !password) {
        toast.error("Please fill all the fields")
        return false
    }

    return true
}