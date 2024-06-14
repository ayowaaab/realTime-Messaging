import React, { useRef } from "react";

const Login = () => {
    const idRef = useRef(null);
  return (
    <form className=" flex flex-col gap-5">
      <div className="flex flex-col gap-2 w-2/3 mt-12 mx-auto">
        <label className="text-md">Enter your ID :</label>
        <input className="text-md px-3 py-2 border rounded-md outline-none border-neutral-400"  placeholder="ID" ref={idRef} required type="text" />
      <button className="btn btn-primary mt-3 w-[20%]">LogIn</button>
      </div>
    </form>
  );
};

export default Login;
