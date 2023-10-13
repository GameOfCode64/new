"use client";
import React, { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

const Contactfrom = () => {
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const fullname = useRef<HTMLInputElement | null>(null);
  const subject = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const message = useRef<HTMLTextAreaElement | null>(null);
  const SubmitHandler = async (e: any) => {
    const Data = {
      fullname: fullname.current?.value,
      subject: subject.current?.value,
      email: email.current?.value,
      message: message.current?.value,
    };
    // console.log(Data);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(Data),
    });
    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="border-[1px] text-white w-full md:w-auto border-white/30 rounded-lg shadow-lg px-10 py-8">
        <form onSubmit={SubmitHandler}>
          <div className="md:w-[460px] w-full">
            <Input
              type="text"
              placeholder="Enter your Name"
              id="fullname"
              ref={fullname}
              className="w-full"
              required
            />
          </div>
          <div className="md:w-[460px] w-full mt-8">
            <Input
              type="text"
              placeholder="Subject"
              id="subject"
              className="w-full"
              ref={subject}
              required
            />
          </div>
          <div className="md:w-[460px] w-full mt-8">
            <Input
              type="email"
              id="email"
              ref={email}
              placeholder="Enter your Email"
              className="w-full"
              required
            />
          </div>
          <div className="md:w-[460px] w-full mt-8">
            <Textarea
              placeholder="Enter Your message here..."
              required
              id="message"
              ref={message}
            />
          </div>
          <div className="mt-8">
            <Button variant="papabtn" className="w-full" type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactfrom;
