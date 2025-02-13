import React from "react";
import Hero from "../appoinments/Hero";
import CallIntakeForm from "../appoinments/CallIntakeForm";
import Section from "../Section";
import { HomeIcon } from "@heroicons/react/24/solid";

type Props = {
  id:any;
  name:any;
};

const ChatForm = ({id, name}: Props) => {
  return (
    <div className="">
      {/* <Hero
        text="Chat With Astrologer"
        icon="/assets/appointment/chat-hero.png"
      /> */}
      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              Chat With Astrologer
            </p>
          </div>
        </Section>
      </div>
      <div className="bg-[url('/assets/horoscope-bg.webp')]">
        <Section>
          <CallIntakeForm id={id} text="Chat Form" type="Chat" className="border-none lg:w-full" name={name} />
        </Section>
      </div>
    </div>
  );
};

export default ChatForm;
