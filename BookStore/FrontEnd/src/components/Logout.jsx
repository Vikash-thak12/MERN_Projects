import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";


const Logout = () => {
    const [authUser, setAuthUser] = useAuth();
    const handlelogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem('users')
            toast.success("Logout successfully")
            setTimeout(() => {
                window.location.reload();
            }, 500);
        } catch (error) {
            toast.error("Error: " + error.message)
        }
    }
    return (
        <div className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
        onClick={handlelogout}>
            Logout
        </div>
    );
};

export default Logout;