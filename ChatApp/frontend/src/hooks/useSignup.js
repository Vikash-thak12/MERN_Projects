import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";


const useSignup = () => {
    const {setAuthUser} = useAuthContext()

    const [loading, setLoading] = useState(false)
    const signup = async ({ fullname, gmail, password, confirmpassword, gender }) => {
        const success = handleInputErrors({ fullname, gmail, password, confirmpassword, gender })
        if (!success) return false;
        setLoading(true)
        try {
            const res = await fetch("http://localhost:8000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ fullname, gmail, password, confirmpassword, gender })
            })

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Signup failed");
            }

            const data = await res.json();
            toast.success("Signup successful!");
            console.log(data);

            //setting the localstorage and updating the auth user
            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)

            return true;

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return {loading, signup}
}   
export default useSignup


// Inside useSignup hook
function handleInputErrors({ fullname, gmail, password, confirmpassword, gender }) {
    if (!fullname || !gmail || !password || !confirmpassword || !gender) {
        toast.error("All fields must be filled");
        return false;
    }
    if (password !== confirmpassword) {
        toast.error("Passwords don't match");
        return false;
    }
    if (password.length < 6) {
        toast.error("Password must be at least 6 characters long");
        return false;
    }
    return true;
}
