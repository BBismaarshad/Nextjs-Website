"use client";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoIosCart, IoIosSearch } from "react-icons/io";
import { IoMenuSharp, IoHeart } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white  shadow-md">
      {/* Top Bar */}
      <div className=" hidden md:flex flex-col   h-[58px]  md:flex-row items-center justify-between  bg-[#252B42] px-4 py-2 text-sm">
        {/* Phone */}
        <div className="flex   items-center space-x-2 text-white font-bold">
          <FaPhoneAlt className="text-lg" />
          <a href="#" className="hover:text-cyan-400">
            (225) 555-0118
          </a>
          <MdOutlineMailOutline className="text-lg" />
          <a href="#" className="hover:text-cyan-400">
            michelle.rivera@example.com
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-2 text-white font-bold">
          <a href="#" className=" font-bold hover:text-cyan-400 ">
            Follow Us and get a chance to win 80% off
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-3 text-white">
          <span className="hover:text-cyan-400">Follow Us:</span>
          <a href="#">
            <FaFacebook className="text-lg hover:text-cyan-400" />
          </a>
          <a href="#">
            <FaYoutube className="text-lg hover:text-cyan-400" />
          </a>
          <a href="#">
            <FaInstagram className="text-lg hover:text-cyan-400" />
          </a>
          <a href="#">
            <FaTwitter className="text-lg hover:text-cyan-400" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 py-3 md:px-10">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#252B42] hover:text-cyan-400">
          Bandage
        </h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-slate-600 hover:text-cyan-400">
            Home
          </a>
          <div className="flex items-center space-x-1">
            <a href="#" className="text-slate-600 hover:text-cyan-400">
              Shop
            </a>
            <RiArrowDownSLine className="text-black hover:text-cyan-400" />
          </div>
          <a href="#" className="text-slate-600 hover:text-cyan-400">
            About
          </a>
          <a href="#" className="text-slate-600 hover:text-cyan-400">
            Blog
          </a>
          <a href="#" className="text-slate-600 hover:text-cyan-400">
            Contact
          </a>
          <a href="#" className="text-slate-600 hover:text-cyan-400">
            Pages
          </a>
        </nav>

        {/* Login / Register */}
        <div className="hidden md:flex items-center space-x-2 text-sky-400 font-bold">
          <a href="#" className="hover:underline hover:text-cyan-400">
            Login
          </a>
          <span>/</span>
          <a href="#" className="hover:underline hover:text-cyan-400">
            Register
          </a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-xl text-sky-400">
          <a href="#" className="hover:text-cyan-400">
            <IoIosSearch />
          </a>
          <div className="relative hover:text-cyan-400">
            <IoHeart />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>
          <div className="relative hover:text-cyan-400">
            <IoIosCart />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </div>
          <IoMenuSharp className="block md:hidden hover:text-cyan-400" />
        </div>
      </div>
    </header>
  );
}
