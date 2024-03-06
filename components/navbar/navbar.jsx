"use client";
import Image from "next/image";
import React from "react";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import LocalPoliceOutlinedIcon from "@mui/icons-material/LocalPoliceOutlined";
import Link from "next/link";
import { Navbar } from "flowbite-react";

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
        <Link href="#">
          <span className="flex">
            <span className="flex flex-row items-center">
              <PermPhoneMsgOutlinedIcon className="mx-4 " />
              <span className="flex flex-col text-sm">
                <span>Need Help?</span>
                <span>Contact Us</span>
              </span>
            </span>
          </span>
        </Link>
        <Link href="#">
          <span className="flex flex-row items-center ">
            <KeyboardReturnOutlinedIcon className="mx-4 " />
            <span className="flex flex-col text-sm ">
              <span className="">Easy</span>
              <span>Return</span>
            </span>
          </span>
        </Link>
        <Link href="#">
          <span className="flex flex-row items-center">
            <LocalPoliceOutlinedIcon className="mx-4 " />
            <span className="flex flex-col text-sm">
              <span className="fs-1">Secure</span>
              <span>Payment</span>
            </span>
          </span>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default MyNavbar;
