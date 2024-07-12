// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckButton from './CheckButton';

const Signup = () => {

    const [inputs, setInputs] = useState({
        fullname: '',
        gamil: '',
        password: '',
        confirmpassword: '',
        gender: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs);
    }


    return (
        <div className="w-full flex items-center justify-center">
            <div className="rounded-lg w-1/4 px-5 py-4 backdrop-filter backdrop-blur-3xl">
                <h1 className="text-center text-3xl">SignUp <span className="text-blue-600 cursor-pointer">ChatApp</span></h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5">
                    <div className="flex flex-col gap-1">
                        <label>Full Name</label>
                        <input
                            value={inputs.fullname}
                            onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
                            className="px-3 py-2 outline-none rounded-md" type="text" name="name" placeholder="Enter your Full Name" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Gmail</label>
                        <input
                            value={inputs.gamil}
                            onChange={(e) => setInputs({ ...inputs, gamil: e.target.value })}
                            className="px-3 py-2 outline-none rounded-md" type="gmail" name="gmail" placeholder="Enter your gmail" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Password</label>
                        <input
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                            className="px-3 py-2 outline-none rounded-md" type="password" name="password" placeholder="Enter your Password" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Confirm Password</label>
                        <input
                            value={inputs.confirmpassword}
                            onChange={(e) => setInputs({ ...inputs, confirmpassword: e.target.value })}
                            className="px-3 py-2 outline-none rounded-md" type="password" name="password" placeholder="Re Enter Password" />
                    </div>
                    <CheckButton />

                    <button className="bg-blue-500 font-bold mt-1 rounded-md cursor-pointer text-white px-4 py-2">SignUp</button>
                </form>
                <h1 className="mt-4 text-center">Already Have an Account. <Link to="/login" className="text-blue-500 cursor-pointer">Login</Link></h1>
            </div>
        </div>
    );
};

export default Signup;