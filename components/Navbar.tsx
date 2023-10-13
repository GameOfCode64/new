"use Client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.svg";
import { Button } from "./ui/button";
import { DownloadCloudIcon, Menu } from "lucide-react";
import { TheamToggle } from "./Theam";
import MobilNavbar from "./MobilNavbar";
const Navbar = () => {
  return (
    <div className="w-[95%] sticky shadow-lg h-[70px] bg-white/10 rounded-lg text-white m-auto md:mt-6 mt-4">
      <div className="">
        <div className="flex items-center justify-between px-3 py-2">
          <div className="w-[100px] h-auto">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className="hidden md:flex mr-4">
            <ul className="flex items-center justify-center">
              <Link href="/">
                <span className="mr-8 text-[17px] font-[600]">Home</span>
              </Link>
              <Link href="/skills">
                <span className="mr-8 text-[17px] font-[600]">Skills</span>
              </Link>
              <Link href="/about">
                <span className="mr-8 text-[17px] font-[600]">About</span>
              </Link>
              <Link href="/contact">
                <span className="mr-8 text-[17px] font-[600]">Contact</span>
              </Link>
              {/* <div className="mr-4">
                <TheamToggle />
              </div> */}
              <Link href="CV.pdf">
                <Button variant="papabtn">
                  <DownloadCloudIcon className="mr-2" />
                  CV
                </Button>
              </Link>
            </ul>
          </div>
          <div className="block md:hidden">
            <MobilNavbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
