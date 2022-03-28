import React, { useState } from "react";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();

    if (user && password) {
      navigate("/");
      setUser("");
      setPassword("");
    }
  };
  return (
    <div className="flex flex-col items-center my-20 bg-slate-700 max-w-lg mx-auto py-4 rounded-lg">
      <h1 className="text-4xl border-b border-slate-600 w-full text-center pb-6">
        Login
      </h1>
      <form onSubmit={loginHandler} className="w-full px-16 ">
        <div className="flex flex-col gap-2 w-full my-5">
          <label>Name :</label>
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="w-full outline-none p-2 text-slate-600 rounded-lg border-none"
          />
        </div>

        <div className="flex flex-col gap-2 w-full my-5">
          <label>Password :</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="w-full outline-none p-2 text-slate-600 rounded-lg border-none"
          />
        </div>

        <Button name="Login" addStyle="w-full my-5" />
      </form>
    </div>
  );
};

export default Login;
