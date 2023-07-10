//  @use-client
'use client'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";

// for react hook form 
type Inputs = {
    name:string,
    email:string,
    subject:string,
    message:string
  };
export default function ContactSection() {

    // use for connecting state for react hook form 

    // onsubmit will be our function and handle dubmit we will recieve from hook form 
    const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data =>{
    window.location.href =`mailto:priyanshujee2017@gmail.com?subject=${data.subject}& body=Hi my name is ${data.name} ${data.message}`;
  };
    return (
        <div className="flex relative flex-col md:flex-col justify-evenly mx-auto items-center text-center md:text-left max-w-7xl h-screen ">
            <h3 className="absolute tracking-[10px] top-[24px] text-2xl uppercase text-gray-500">Contact Us</h3>

            <div>
                <h4 className="text-4xl font-semibold text-center">
                    I have just got what you need {"    "}
                    <span className="decoration-[#F7AB0A]/50 underline">Let's Talk</span>
                </h4>
            </div>
            <div className="space-y-10">
                <div className="flex items-center justify-center space-x-5">
                    <PhoneIcon className="h-8 w-8 text-[#F7AB0A]/50 animate-pulse" />
                    <p className="text-2xl">+916394622742</p>
                </div>

                <div className="flex items-center justify-center space-x-5">
                    <EnvelopeIcon className="h-8 w-8 text-[#F7AB0A]/50 animate-pulse" />
                    <p className="text-2xl">priyanshujee2017@gmail.com</p>
                </div>
                <div className="flex items-center justify-center space-x-5">
                    <MapPinIcon className="h-8 w-8 text-[#F7AB0A]/50 animate-pulse" />
                    <p className="text-2xl">Noida uttar Pradesh</p>
                </div>
                <form  onSubmit={handleSubmit(onSubmit)}className="w-fit flex flex-col space-y-2">
                    <div className="flex space-x-2">
                    <input {...register('name')}placeholder="Name" className='contactInput'type='text'/>
                    <input {...register('email')}type='email' placeholder="email" className="contactInput"/>
                    </div>
                    <input {...register('subject')} type='text' placeholder="subject" className="contactInput" />
                    <textarea {...register('message')} placeholder='message 'className="contactInput"/>
                    <button type='submit'className="bg-[#F7AB0A]  px-10 py-5 rounded-md text-black font-bold text-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}