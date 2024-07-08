// import React from 'react';

const Login = () => {
  return (
    <div>
      <div>
        <form action="submit">
          <div>
          <label>Enter your Gmail</label>
          <input type="text" placeholder="Enter your gmail" />
          </div>
          <div>
          <label>Enter your Name</label>
          <input type="text" placeholder="Enter your Name" />
          </div>

          <div>
          <label>Enter your Password</label>
          <input type="password" placeholder="Enter your Password" />
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;