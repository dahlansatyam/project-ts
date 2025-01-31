import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  heading: string;
};
const card = [
  {
    id: 1,
    img: "/assets/home/review.png",
    text: "Satyam Dalhan",
    specialization: "Tarot",
  },
  {
    id: 2,
    img: "/assets/home/review.png",
    text: "Satyam Dalhan",
    specialization: "Tarot",
  },
  {
    id: 3,
    img: "/assets/home/review.png",
    text: "Satyam Dalhan",
    specialization: "Tarot",
  },
];
const OurAstrologer = ({ heading }: Props) => {
  return (
    <div className="py-[30px]">
      <p className="text-center text-[32px] font-bold">{heading}</p>
      <div className="grid gap-5 pt-6 lg:grid-cols-3 ">
        {card.map((item, index) => (
          <Link
            key={index}
            href={`/blog/${item?.id}`}
            className="flex  flex-col rounded-[20px] border-[4px] border-[#DC6563] bg-white py-2 shadow-xl"
          >
            <div className="flex items-center justify-center   ">
              <Image
                src={item.img}
                alt={item.text}
                height={99}
                width={99}
                className="h-[99px] w-[99px] rounded-full border-[5px] border-[#DC6563] "
              />
            </div>
            <div className=" ">
              <p className=" text-center text-lg font-bold">{item?.text}</p>
              <div className=" ">
                <p className="text-center font-bold">{item.specialization}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurAstrologer;
