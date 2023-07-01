"use client";
// import { Button } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
function Header() {
  return (
    <>
      <div>
        <div className="tab:mx-5 lap:mx-10 top-0 left-0 right-0  py-2 bg-transparent z-10  ">
          <div className="grid grid-cols-2 mx-10">
            <div className="relative  lap:h-[64.57px] tab:h-12  tab:w-24 lap:w-[146px] w-28 h-10">
              <Image
                src={
                  "https://res.cloudinary.com/dt0j68vdr/image/upload/v1688221590/download_n7zu48.png"
                }
                className=""
                layout="fill"
                objectFit="contain"
                alt="logo"
              />
            </div>
            <div className="flex justify-end align-top items-end gap-10 ">
              <div className="text-xl font-bold font-[Inter] text-black text-bold items-center cursor-pointer tab:px-2 lap:px-6  mt-2">
                Home
              </div>
              <div className="text-xl font-bold font-[Inter] text-black text-bold items-center cursor-pointer tab:px-2 lap:px-6  mt-2">
                Browse Jobs
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
