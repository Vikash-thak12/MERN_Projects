import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="w-full flex items-center justify-center bg-blur">
            <div className="border rounded-lg w-1/4 px-5 py-4 bg-gray-700 backdrop-filter backdrop-blur-lg">
                <h1 className="text-center text-3xl">Login <span className="text-blue-600 cursor-pointer">ChatApp</span></h1>
                <form className="flex flex-col gap-4 mt-5">
                    <div className="flex flex-col gap-2">
                        <label>Gmail</label>
                        <input className="px-3 py-2 outline-none rounded-md" type="gmail" name="gmail" placeholder="Enter your gmail" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Password</label>
                        <input className="px-3 py-2 outline-none rounded-md" type="password" name="password" placeholder="Enter your Password" />
                    </div>

                <button className="bg-blue-500 font-bold mt-3 rounded-md cursor-pointer text-white px-4 py-2">Login</button>
                </form>
                <h1 className="mt-4 text-center">{"Didn't"} Have an Account. <Link to="/signup" className="text-blue-500 cursor-pointer">SignUp</Link></h1>
            </div>
        </div>
    );
};

export default Login;