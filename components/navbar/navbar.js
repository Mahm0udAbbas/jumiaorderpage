"use client";
import Image from "next/image";
import React from "react";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import LocalPoliceOutlinedIcon from "@mui/icons-material/LocalPoliceOutlined";
import Link from "next/link";
import { Navbar, Button } from "flowbite-react";

import { AutoAwesomeMosaicRounded } from "@mui/icons-material";
function MyNavbar() {
  return (
    <Navbar container rounded className="mb-2">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <Image
          src="/logo.png"
          height={30}
          width={80}
          alt="Picture of the logo"
        />
      </Navbar.Brand>
      <h1 className="flex flex-1 justify-center items-center text-xl font-bold text-gray-700 dark:text-gray-100">
        <span>Edit Adress</span>
      </h1>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="#">
          <div className="flex">
            <div className="flex flex-row items-center">
              <PermPhoneMsgOutlinedIcon className="mx-4 " />
              <div className="flex flex-col text-sm">
                <span>Need Help?</span>
                <Link href="/about">Contact Us</Link>
              </div>
            </div>
          </div>
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          <div className="flex flex-row items-center ">
            <KeyboardReturnOutlinedIcon className="mx-4 " />
            <div className="flex flex-col text-sm ">
              <span className="">Easy</span>
              <span>Return</span>
            </div>
          </div>
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          <div className="flex flex-row items-center">
            <LocalPoliceOutlinedIcon className="mx-4 " />
            <div className="flex flex-col text-sm">
              <span className="fs-1">Secure</span>
              <span>Payment</span>
            </div>
          </div>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
  // // <>
  //   {/* <div className=" bg-white bg-cover mb-5">
  //     <div className="flex justify-between items-center container mx-auto px-4 py-5">
  //       <div>
  //         <Image
  //           src="/logo.png"
  //           height={30}
  //           width={80}
  //           alt="Picture of the logo"
  //         />
  //       </div>
  //       <h1 className="text-xl font-bold text-gray-700 dark:text-gray-100">
  //         Edit Adress
  //       </h1>
  //
  //
  //
  //       </div>
  //     </div>
  //   </div> */}
  // {/* </> */}
}

export default MyNavbar;
