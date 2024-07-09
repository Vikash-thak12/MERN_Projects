import { useState } from "react";
import bg from "../assets/loginbg1.jpg"
import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import { CameraAlt } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponent";
import { useFileHandler, useInputValidation } from '6pp'


const Login = () => {
  const [islogin, setIslogin] = useState(false)
  const name = useInputValidation("")
  const email = useInputValidation("")
  const password = useInputValidation("")
  const avatar = useFileHandler("single")

  const toggle = () => {
    setIslogin(islogin => !islogin)
  }

  const prevent = (e) => {
    e.preventDefault()
  }


  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-center bg-no-repeat flex justify-center items-center h-screen">
      <div style={{ backdropFilter: "blur(15px)" }} className="border p-5 w-1/4 rounded-lg">
        <h1 className="text-center text-3xl font-bold text-white">{islogin ? "Login" : "SignUp"}</h1>
        <Stack className="relative flex items-center justify-center w-full h-32">
          <Avatar component="label" style={{ width: '100px', height: '100px', objectFit: "contain", cursor: "pointer"}} src={avatar.preview} />
            <IconButton component="label" style={{ position: "absolute", bottom: "0", right: "125px", color: "white"}} >
              <>
              <CameraAlt  />
              <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
              </>
            </IconButton>
        </Stack>
        <form onSubmit={prevent} action="submit" className="flex flex-col gap-6">

          {
            islogin ? "" : (
              <>
                <div className="flex flex-col">
                  <label className="font-medium text-xl text-white">Enter your Name</label>
                  <input value={name.value} onChange={name.changeHandler} className="border mt-2 outline-none p-2 rounded-md bg-transparent text-white" type="text" placeholder="Enter your Name" />
                </div>
              </>
            )
          }
          <div className="flex flex-col">
            <label className="font-medium text-xl text-white">Enter your Email</label>
            <input value={email.value} onChange={email.changeHandler}  className="border mt-2 outline-none p-2 rounded-md bg-transparent text-white" type="email" placeholder="Enter your email" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-xl text-white">Enter your Password</label>
            <input value={password.value} onChange={password.changeHandler} className="border mt-2 outline-none p-2 rounded-md bg-transparent text-white" type="password" placeholder="Enter your Password" />
          </div>
          {
            password.error && (
              <Typography color="error" variant="caption">
                {password.error}
              </Typography>
            )
          }
          
          <div className="flex justify-center bg-red-500 mx-auto rounded-lg">
            <button className="text-white text-2xl px-3 py-1 rounded-lg">{islogin ? "Login" : "SignUp"}</button>
          </div>

          <div className="text-white text-center text-xl">
            <h2>{islogin ? "Didn't have an Account." : "Already have an Account."} <span onClick={toggle} className="cursor-pointer underline text-blue-600">{islogin ? "SignUp" : "Login"}</span></h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;