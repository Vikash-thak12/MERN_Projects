import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    </form>
                    <h3 className="font-bold text-lg mb-4">Login</h3>
                    <div className='space-y-6'>
                        <div className='space-y-1'>
                            <label htmlFor='Email'>Email</label>
                            <input type="email" placeholder="Enter your Email" className="input input-bordered w-full" />
                        </div>

                        <div className='space-y-1'>
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder='Enter your Password' className='input input-bordered w-full' />
                        </div>
                    </div>
                    <div className='flex justify-around mt-4'>
                        <button className='px-4 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-800 duration-200'>Login</button>
                        <p>Not Registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>signup</Link></p>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Login;