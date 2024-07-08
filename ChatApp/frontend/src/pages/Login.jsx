// import React from 'react';
// import bg from "../assets/loginbg.jpg"
import { useState } from "react";
import bg from "../assets/loginbg1.jpg"
import { Avatar, IconButton, Stack } from "@mui/material";
import { CameraAlt } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponent";


const Login = () => {
  const [islogin, setIslogin] = useState(true)
  const toggle = () => {
    setIslogin(islogin => !islogin)
  }
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-center bg-no-repeat flex justify-center items-center h-screen">
      <div className="border p-5 w-1/4 rounded-lg">
        <h1 className="text-center text-3xl font-bold text-white">{islogin ? "Login" : "SignUp"}</h1>
        <Stack className="relative flex items-center justify-center w-full h-32">
          <Avatar component="label" style={{ width: '100px', height: '100px', objectFit: "contain", cursor: "pointer"}}>
          </Avatar>
            <IconButton component="label" style={{ position: "absolute", bottom: "0", right: "125px", color: "white"}} >
              <>
              <CameraAlt  />
              <VisuallyHiddenInput type="file" />
              </>
            </IconButton>
        </Stack>
        <form className="flex flex-col gap-6">

          {
            islogin ? "" : (
              <>
                <div className="flex flex-col">
                  <label className="font-medium text-xl text-white">Enter your Name</label>
                  <input className="border mt-2 outline-none p-2 rounded-md bg-transparent text-white" type="text" placeholder="Enter your Name" />
                </div>
              </>
            )
          }
          <div className="flex flex-col">
            <label className="font-medium text-xl text-white">Enter your Gmail</label>
            <input className="border mt-2 outline-none p-2 rounded-md bg-transparent text-white" type="text" placeholder="Enter your gmail" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-xl text-white">Enter your Password</label>
            <input className="border mt-2 outline-none p-2 rounded-md bg-transparent text-white" type="password" placeholder="Enter your Password" />
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