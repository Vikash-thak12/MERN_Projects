import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { useForm } from "react-hook-form";
import axios from 'axios'
const Signup = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        // console.log(userInfo)
        await axios.post("http://localhost:8001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    alert("User created successfully")
                }
            })
            .catch((err) => {
                console.log(err);
                alert("Error", err)
            })
        // console.log(data);
    }


    return (
        <div>
            <div className="h-screen flex items-center justify-center">
                <div className="modal-box border">
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            <h3 className="font-bold text-lg mb-4">Sign Up</h3>
                            <div className='space-y-6'>
                                <div className='space-y-1'>
                                    <label htmlFor='fullname'>Full Name</label>
                                    <input {...register("fullname", { required: true })} type="text" placeholder="Enter your Name" className="input input-bordered w-full" />
                                    {errors.fullname && <span className='text-xs text-red-500'>This field is required</span>}
                                </div>

                                <div className='space-y-1'>
                                    <label htmlFor='Email'>Email</label>
                                    <input {...register("email", { required: true })} type="email" placeholder="Enter your Email" className="input input-bordered w-full" />
                                    {errors.email && <span className='text-xs text-red-500'>This field is required</span>}
                                </div>

                                <div className='space-y-1'>
                                    <label htmlFor="password">Password</label>
                                    <input {...register("password", { required: true })} type="password" placeholder='Enter your Password' className='input input-bordered w-full' />
                                    {errors.password && <span className='text-xs text-red-500'>This field is required</span>}
                                </div>
                            </div>
                            <div className='flex justify-around mt-4'>
                                <button className='px-4 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-800 duration-200'>Sign Up</button>
                                <p>Have Account.{" "} <button onClick={() => document.getElementById('my_modal_3').showModal()} className='underline text-blue-500 cursor-pointer'>Login</button>{" "}
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;