"use client";

import { Link, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Skills",
    href: "/skills",
  },
  {
    title: "About Me!",
    href: "/about",
  },
  {
    title: "Contact Me!",
    href: "/contact",
  },
];

const MobilNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost">
          <Menu />
        </Button>
        <SheetContent side="left">
          <div className="px-2 py-3 w-[100px]">
            <Image src={logo} alt="logo" />
          </div>
          <div className="mt-28">
            <div className="mx-4 my-6">
              <div className="">
                {navLinks.map((item, index) => (
                  <div className="" key={index}>
                    <a href={item.href}>
                      <div className="hover:bg-black/10 px-3 mt-5 py-2 hover:rounded-md">
                        {item.title}
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </SheetTrigger>
    </Sheet>
  );
};

export default MobilNavbar;
