"use client";
import { Input } from "postcss";
import { IoSearch } from "react-icons/io5";
import React, { useState } from "react";

const Searchbar = () => {
  return (
    <div className="py-10 flex justify-center items-center">
      <form className="w-[450px] relative ">
        <div className="relative">
          <input
            type="search"
            placeholder=" Type Hera "
            className="w-full p-4  rounded-full bg-[#D9D9D9]"
          />
          <button className=" absolute  right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-full">
            <IoSearch />
          </button>
        </div>{" "}
      </form>
    </div>
  );
};

export default Searchbar;
