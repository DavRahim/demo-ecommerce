import React, { useState } from "react";
import From from "./From";

const Login = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const ourData = { name, email, password, confirmPassword };

  const formHandle = (e) => {
    e.preventDefault();
    // console.log(e.targer.name.value,'e')
    setData((ore) => [...ore, ourData]);
  };

  return (
    <div className="">
      <from
        onSubmit={formHandle}
        className="flex flex-col bg-gray-400 w-[60%] ms-auto gap-2 my-8"
      >
        <input
          onChange={(e) => setName(e.target.value)}
          className="border border-red-500 p-4 outline-none"
          type="text"
          placeholder="enter your name"
          name="name"
        />

        <input
          onChange={(e) => setName(e.target.value)}
          className="border border-red-500 p-4 outline-none"
          type="text"
          placeholder="enter your email"
          name="email"
        />

        <input
          onChange={(e) => setName(e.target.value)}
          className="border border-red-500 p-4 outline-none"
          type="password"
          placeholder="enter your password"
          name="password"
        />

        <input
          onChange={(e) => setName(e.target.value)}
          className="border border-red-500 p-4 outline-none"
          type="password"
          placeholder="enter your Confirmpassword"
          name="password"
        />
        <button className="bg-blue-300 w-[300px] mx-auto p-3 rounded">Submit</button>
      </from>
      <div className="my-8">
        {
        data.map((d) => (<From data={d} key={d?.name}></From>
        ))}
      </div>
    </div>
  );
};

export default Login;
