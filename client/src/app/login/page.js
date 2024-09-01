"use client";

import React, { useState } from "react";
import Link from "next/link";

function page() {

    const [user,setUser] = useState({email:'',password:''});

    const handleOnChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setUser({...user,[name]:value});
    }

    const handleOnSubmit = ()=>{

    }

    return (
        <div className="w-screen h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="">
            <div className="p-20 w-[30vw] bg-gray-800">
            <div className="text-[28px] mb-10">Login</div>
            <form className="space-y-10 mb-5">
                <div className="space-y-1">
                <label htmlFor="email" className="block text-[20px]">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="py-1 text-[20px] bg-transparent outline-0 w-full border-b-[1px] placeholder:text-[15px] focus:border-b-2"
                    placeholder="Enter your email"
                    value={user.email}
                    onChange={(e)=>handleOnChange(e)}
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
                    className="py-1 text-[20px] bg-transparent outline-0 w-full border-b-[1px] placeholder:text-[15px] focus:border-b-2"
                    placeholder="Enter your password"
                    value={user.password}
                    onChange={handleOnChange}
                />
                </div>

                <button className="bg-green-700 hover:bg-green-600 px-5 py-2 rounded-sm text-[16px] font-semibold">
                Login
                </button>
            </form>
            <div className="text-sm space-x-3">
                <span>Don't have an account? </span>
                <Link
                href="/register"
                className=" text-gray-400 hover:text-white"
                >
                Register now
                </Link>
            </div>
            </div>
        </div>
        </div>
    );
}

export default page;
