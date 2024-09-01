"use client";

import Link from "next/link";
import React, { useState } from "react";

function page() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="w-screen h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="">
        <div className="p-20 w-[30vw] bg-gray-800">
          <div className="text-[28px] mb-10">Register</div>
          <form className="space-y-10 mb-5">
            <div className="space-y-1">
              <label htmlFor="name" className="block text-[20px]">
                Full name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                className="py-1 text-[20px] bg-transparent outline-0 w-full border-b-[1px] placeholder:text-[15px] focus:border-b-2"
                placeholder="Enter your full name"
                onChange={(e) => handleOnChange(e)}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="username" className="block text-[20px]">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={user.username}
                className="py-1 text-[20px] bg-transparent outline-0 w-full border-b-[1px] placeholder:text-[15px] focus:border-b-2"
                placeholder="Enter your username"
                onChange={(e) => handleOnChange(e)}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="block text-[20px]">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                className="py-1 text-[20px] bg-transparent outline-0 w-full border-b-[1px] placeholder:text-[15px] focus:border-b-2"
                placeholder="Enter your email"
                onChange={(e) => handleOnChange(e)}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="block text-[20px]">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={user.password}
                className="py-1 text-[20px] bg-transparent outline-0 w-full border-b-[1px] placeholder:text-[15px] focus:border-b-2"
                placeholder="Enter your password"
                onChange={(e) => handleOnChange(e)}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="confirm_password" className="block text-[20px]">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                value={user.confirm_password}
                className="py-1 text-[20px] bg-transparent outline-0 w-full border-b-[1px] placeholder:text-[15px] focus:border-b-2"
                placeholder="Re-enter your password"
                onChange={(e) => handleOnChange(e)}
              />
            </div>

            <button className="bg-green-700 hover:bg-green-600 px-5 py-2 rounded-sm text-[16px] font-semibold">
              Register
            </button>
          </form>
          <div className="text-sm space-x-3">
            <span>Already have an account? </span>
            <Link href="/login" className=" text-gray-400 hover:text-white">
              Login now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
