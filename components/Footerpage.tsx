"use client";
import { Instagram, LinkedinIcon, Twitter } from "lucide-react";
import Link from "next/link";

const Footerpage = () => {
  return (
    <div className="md:flex md:items-center text-center md:justify-between">
      <div className="">
        <h1>© J.dev 2023 . All rights reserved.</h1>
      </div>
      <div className="flex items-center justify-center md:mt-0 mt-4 gap-5">
        <Link href="">
          <span className="w-[45px] flex items-center justify-center h-[45px] transition-[0.9s] rounded-full hover:bg-gradient-to-r from-purple-500 to-cyan-500">
            <Instagram />
          </span>
        </Link>
        <Link href="">
          <span className="w-[45px] flex items-center justify-center h-[45px] transition-[0.9s] rounded-full hover:bg-gradient-to-r from-purple-500 to-cyan-500">
            <Twitter />
          </span>
        </Link>
        <Link href="https://www.linkedin.com/in/jaydeb-sarader-39210b193/">
          <span className="w-[45px] flex items-center justify-center h-[45px] transition-[0.9s] rounded-full hover:bg-gradient-to-r from-purple-500 to-cyan-500">
            <LinkedinIcon />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Footerpage;
