/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import Alert from '@mui/material/Alert';
type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const [name , setName]=useState("")
  const [email , setEmail]=useState("");
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:priyanshujee2017@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message}`;
    return(
      <Alert severity="success">This is a success alert — check it out!</Alert>
    )
  };

  const handleButtonClick=()=>{
    if(!name || !email){
      <Alert severity="warning">please Enter your Name and Email</Alert>
    }else{
      onSubmit({ name, email, subject: "", message: "" });
    }
  }

  return (
    <div className="flex flex-col relative text-center justify-center mx-auto md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen items-center">
      <h3 className="absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl ">
        Contact
      </h3>
      <div className="flex flex-col pt-32 space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-10">
        <h4 className="text-xl font-semibold text-center md:text-2xl lg:text-3xl 2xl:text-4xl">
          I have got just what you need.{" "}
          <span className="underline decoration-darkGreen/50">Lets talk.</span>
        </h4>

        <div className="space-y-1 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-5">
          <div className="flex justify-center space-x-5 items -center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">+91 6394622742</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">
              priyanshujee2017@gmail.com
            </p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">
              Noida, India
            </p>
          </div>
        </div>

        <form
        onSubmit={(e)=>{
          e.preventDefault();
          handleButtonClick()
        }}
          className="flex flex-col mx-auto space-y-2 w-80 md:w-fit"
        >
          <div className="space-y-2 md:flex md:space-x-2 md:space-y-0 ">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-80 md:w-auto"
              type="text"
             
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
              }}
              value={name}
            />{" "}
            <input
              {
                ...register("email")
              
              }
              placeholder="Email"
              className="contactInput w-80 md:w-auto"
              type="email"
        
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput "
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
        <button type='submit'className="bg-[#F7AB0A]  px-10 py-5 rounded-md text-black font-bold text-lg">Submit</button>
        </form>
      </div>
    </div>
  );
}