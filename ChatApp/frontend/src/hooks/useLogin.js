import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useLogin = () => {
    const [loading, setLoading] = useState()
    const { setAuthUser } = useAuthContext()

    const login = async (gmail, password) => {
        setLoading(true)
        try {
            const res = await fetch("http://localhost:8000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ gmail, password })
            })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)
            console.log(data.userDetails);
            setTimeout(() => {
                toast.success(`Welcome back ${data.userDetails.gender === "male" ? "Mr." : "Mrs."} ${data.userDetails.fullname}`)
            }, 2000);

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, login }
}

export default useLogin
