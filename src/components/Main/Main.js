import React from "react";
import link from "../assets/images/link.png";
import pic1 from "../assets/images/pic1.png";

export default function Main() {
  return (
    <div className="h-full bg-[#e9e2db]">
      <div className="flex items-center pl-36">
        <img src={link} alt="" className="h-36" />
        <div className="pl-8 space-y-4 pt-8">
          <h1 className="text-[#A39D89] text-4xl">Mandla Mbolekwa</h1>
          <p>
            New website under construction.
            <br /> coming soon...{" "}
          </p>
        </div>
      </div>
      <div className="p-10 mt-5">
        <div className="relative rounded-md text-gray-400">
          <div
            className="absolute p-8 flex justify-center gap-5 top-0 left-0 w-full h-full rounded-lg z-10 cursor-pointer"
            style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
          >
            <h1 className="text-xl">CHECK MY EXISTING SITE</h1>
            <div className="absolute flex items-center top-1/2 right-16  border w-8 h-8 rounded-full">
              <img
                src={link}
                alt=""
                className="relative -left-4  w-6"
                style={{ transform: "rotate(270deg)" }}
              />
            </div>
          </div>
          <img
            src={pic1}
            alt=""
            className="w-full h-full object-fill rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
