"use client";
import { DownloadCloud, Link, Sparkles } from "lucide-react";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";
import Image from "next/image";
import bgimg from "@/public/images/joy.png";

const Heropage = () => {
  return (
    <div className="mt-16">
      <div className="inline-block md:flex items-center justify-between">
        <div className="px-2 py-1">
          <span className="w-full md:w-[340px] rounded-3xl px-3 py-2 flex bg-navbar">
            <Sparkles className="mr-2" />
            Joiner Full Stack Software Engineer
          </span>
          <div className="px-3 py-2">
            <p className="mt-8 md:text-[56px] text-[36px] font-[900]">
              Hi! i&#39;m
            </p>
            <p className="md:text-[56px] text-[36px] font-[900] text-[#896efd]">
              Jaydeb Sarader
            </p>
            <p className="text-transparent mt-2 md:mt-0 md:text-[54px] text-[28px] font-[900] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              <TypewriterComponent
                options={{
                  strings: [
                    "Software Engineer.",
                    "Video editor.",
                    "Photographer.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <p className="mt-4 w-full ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              nulla eum mollitia molestiae velit ipsa amet ad blanditiis, porro
              perferendis?
            </p>
            <div className="mt-8">
              <a href="CV.pdf">
                <Button variant="papabtn">
                  <DownloadCloud className="mr-2" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8 md:mt-0 md:ml-[160px]">
          <div className="bg-navbar w-[320px] md:w-[460px] md:h-[460px] h-[320px] rounded-full">
            <Image src={bgimg} alt="hero-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
