import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";


const Login = () => {
    const [gmail, setGmail] = useState("")
    const [password, setPassword] = useState("")

    const { loading, login } = useLogin()

    const handlesubmit = async (e) => {
        e.preventDefault();
        await login(gmail, password)
    }
    return (
        <div className="w-full flex items-center justify-center">
            <div className="rounded-lg w-1/4 px-5 py-4 backdrop-filter  backdrop-blur-3xl">
                <h1 className="text-center text-3xl">Login <span className="text-blue-600 cursor-pointer">ChatApp</span></h1>
                <form onSubmit={handlesubmit} className="flex flex-col gap-4 mt-5">
                    <div className="flex flex-col gap-2">
                        <label>Gmail</label>
                        <input
                            value={gmail}
                            onChange={(e) => setGmail(e.target.value)}
                            className="px-3 py-2 outline-none rounded-md" type="email" name="gmail" placeholder="Enter your gmail" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="px-3 py-2 outline-none rounded-md" type="password" name="password" placeholder="Enter your Password" />
                    </div>

                    <button className="bg-blue-500 font-bold mt-3 rounded-md cursor-pointer text-white px-4 py-2">
                        {
                            loading ? <span className="loading loading-spinner"></span> : "Login"
                        }
                    </button>
                </form>
                <h1 className="mt-4 text-center">{"Didn't"} Have an Account. <Link to="/signup" className="text-blue-500 cursor-pointer">SignUp</Link></h1>
            </div>
        </div>
    );
};

export default Login;