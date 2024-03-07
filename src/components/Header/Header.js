import React from "react"
import logo from "../assets/images/logo.png"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex bg-[#FFFFFF] shadow items-center justify-around w-full">
      <img src={logo} alt="" className="h-20"/>
      <div className="flex gap-5">
        <FaGithub  className="text-2xl"/>
        <FaLinkedin className="text-2xl"/>
      </div>
    </div>
  )
}
