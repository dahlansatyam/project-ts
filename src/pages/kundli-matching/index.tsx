import AlsoCheck from "@/components/common/AlsoCheck";
import ConnectCard from "@/components/common/ConnectCard";
import Faq from "@/components/common/Faq";
import Hero from "@/components/common/Hero";
import TodaysHoroscope from "@/components/common/TodaysHoroscope";
import { Faqs } from "@/components/horoscope/horoscope-sign";
import About from "@/components/kundli/kundli-matching/About";
import NewKundliForm from "@/components/kundli/kundli-matching/NewKundliForm";
import SavedKundli from "@/components/kundli/kundli-matching/SavedKundli";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const faqsDetail: Faqs = {
  title: "Chat With Astrologer - FAQs",
  faq: [
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
  ],
};

function KundliMatching({}: Props) {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              Kundly Matching
            </p>
          </div>
        </Section>
      </div>
      <div className=" py-[30px]">
        <Section>
          <div className="flex flex-col ">
            <p className="text-center text-[30px] font-bold ">Match - Making</p>
            <p className="text-center text-[20px]  ">
              Find your right one, through Kundli Matching
            </p>
            <div className="mt-[30px] flex flex-col text-justify text-base">
              <p>
                Looking for your free Kundli from expert astrologers? Then you
                have come to the right place. The online free kundali available
                on Astrotalk is a 100% free and authentic free Kundli that has
                been prepared after consulting more than 50 expert astrologers
                on board. The free kundli is such that it can give you a glimpse
                into various aspects of your life such as your career, love
                life, marriage, business and much more. The online kundli
                prepared by the free Kundali software here is no less than any
                traditional Kundli and can also be used for purposes like
                matching making, kundali matching for marriage or simply making
                future predictions.
              </p>
              <p>
                {` Talking about future predictions, the kundali catered by Astrotalk
              to you is such that it considers the movement of all the planets
              in the native's life from the beginning of his or her life till as
              far as 100 years. Doing so helps you understand the reasons behind
              not only the ongoing circumstances but also what's to come for you
              in the future. So if in any way you are confused about life, the
              online kundli can be your saviour. Having said that, make sure you
              try the fre online kunldi, and let us know what you feel about it.`}
              </p>
            </div>
          </div>
          <div className="my-8 grid grid-cols-2 gap-y-6 lg:grid-cols-12 lg:gap-6">
            <div className="col-span-4">
              <SavedKundli />
            </div>
            <div className="col-span-8">
              <NewKundliForm />
            </div>
          </div>
        </Section>
        <ConnectCard />
        <About />
        <Faq faqDetail={faqsDetail} />
        <AlsoCheck />
        <TodaysHoroscope />
      </div>
    </div>
  );
}

export default KundliMatching;
