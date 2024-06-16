import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg mb-4">Login</h3>
                        <div className='space-y-6'>
                            <div className='space-y-1'>
                                <label htmlFor='Email'>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your Email"
                                    className="input input-bordered w-full"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className='text-xs text-red-500'>This field is required</span>}
                            </div>

                            <div className='space-y-1'>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    placeholder='Enter your Password'
                                    className='input input-bordered w-full'
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className='text-xs text-red-500'>This field is required</span>}
                            </div>
                        </div>
                        <div className='flex justify-around mt-4'>
                            <button className='px-4 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-800 duration-200'>Login</button>
                            <p>Not Registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>signup</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Login;