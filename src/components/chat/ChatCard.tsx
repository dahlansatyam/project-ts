import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Popup from "../talk-to-astrologer/Popup";

type Props = {
  detail: {
    name: string;
    expertise: string;
    experience: number;
    language: string;
    ratings: number;
    orders: number;
    isPremium: boolean;
  };
  service: string;
};

function ChatCard({ detail, service }: Props) {
  const { name, expertise, experience, language, orders, ratings, isPremium } =
    detail;

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div
      className="relative flex cursor-pointer justify-evenly space-x-4 overflow-hidden rounded-xl border-4 border-[#DC6563] bg-white  p-4 shadow-xl"
      onClick={openPopup}
    >
      {isPremium && (
        <div className="absolute right-[41%] top-8 w-full -rotate-45   bg-[#DC6563] py-[2px] text-center">
          <p className="text-xs font-semibold text-white">Top Choice</p>
        </div>
      )}
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="rounded-full bg-[#DC6563] p-2">
          <div className=" ">
            <Image
              src="/assets/home/review.png"
              alt="astrologer"
              width={92}
              height={92}
              loading={"lazy"}
            />
          </div>
        </div>
        <div className="flex">
          <StarIcon className="h-5 w-5 text-[#F9D101]" />
          <StarIcon className="h-5 w-5 text-[#F9D101]" />
          <StarIcon className="h-5 w-5 text-[#F9D101]" />
          <StarIcon className="h-5 w-5 text-[#F9D101]" />
          <StarIcon className="h-5 w-5 text-[#F9D101]" />
        </div>
        <p className="text-xs font-medium">{orders} orders</p>
      </div>
      <div className="space-y-3">
        <p className="font-[georgia] text-[22px] font-semibold ">{name}</p>
        <div className="space-y-2 ">
          <p className="w-[150px] truncate text-base ">{expertise}</p>
          <p className="text-xs ">{language}</p>
          <p className="text-xs ">Experience: {experience} years</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold ">Free</p>
          <Link href="/chat/chat">
            <button className="rounded-lg bg-[#CA2127] py-1 px-4 text-base font-semibold text-white">
              {service}
            </button>
          </Link>
        </div>
      </div>

      {/* {isPopupOpen && (
        <Popup btn="calling" detail={detail} onClose={closePopup} />
      )} */}
    </div>
    //     <div onClick={openPopup} className="border-[3px] border-[#DC6563] rounded-[20px] px-4 py-5 bg-white shadow-xl">
    // {isPremium && (
    //   <div className="flex items-center gap-2">
    //     <div className="">
    //     <Image
    //            src="/assets/home/review.png"
    //               alt="astrologer"
    //               width={92}
    //                height={92}
    //                loading={"lazy"}
    //              className="rounded-full bg-[#DC6563] p-2"/>
    //              <div className="flex">
    //           <StarIcon className="h-5 w-5 text-[#F9D101]" />
    //           <StarIcon className="h-5 w-5 text-[#F9D101]" />
    //           <StarIcon className="h-5 w-5 text-[#F9D101]" />
    //           <StarIcon className="h-5 w-5 text-[#F9D101]" />
    //           <StarIcon className="h-5 w-5 text-[#F9D101]" />
    //         </div>
    //         <p className="text-xs font-medium">{orders} orders</p>
    //     </div>
    //     <div className="">
    //     <p className="font-[georgia] text-[22px] font-semibold ">{name}</p>
    //     <div className="space-y-2 ">
    //           <div className="truncate w-[150px]"><p className="text-base  ">{expertise}</p></div>
    //           <p className="text-xs ">{language}</p>
    //           <p className="text-xs ">Experience: {experience} years</p>
    //         </div>
    //         <div className="flex items-center justify-between">
    //           <p className="text-base font-semibold ">Free</p>
    //           <Link href="/chat/chat">
    //             <button className="rounded-lg bg-[#CA2127] py-1 px-4 text-base font-semibold text-white">
    //               {service}
    //             </button>
    //           </Link>
    //         </div>
    //     </div>
    //   </div>
    // )}

    //     </div>
  );
}

export default ChatCard;
