import Section from "@/components/Section";
import React from "react";
import Link from "next/link";

const card = [
  {
    img: "/assets/shop/gemstone/Amethyst.svg",
    name: "896",
    url: "",
  },
  {
    img: "/assets/shop/onlinepuja.svg",
    name: "222",
    url: "",
  },
  {
    img: "/assets/shop/kundlimatching.svg",
    name: "222",
    url: "",
  },
  {
    img: "/assets/shop/gemstone.svg",
    name: "222",
    url: "",
  },
];

type Props = {};

const DetailsGemstone = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover bg-repeat py-8 ">
      <Section>
        <div>
          <div className="flex flex-col items-start justify-center gap-4 text-gray-700 md:flex-row">
            <div className="flex items-center gap-2 md:flex-col">
              <div className=" rounded-md border border-[#DC6563]">
                <img
                  className="h-full w-full rounded-md"
                  src="/assets/shop/gemstone/Amethyst.svg"
                  alt=""
                />
              </div>
              <div className="  rounded-md border border-[#DC6563]">
                <img
                  className="h-full w-full overflow-hidden rounded-md"
                  src="/assets/shop/gemstone/Amethyst.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="h-[360px] w-[335px] rounded-md border border-[#DC6563]">
              <img
                src="/assets/shop/gemstone/Amethyst.svg"
                alt=""
                className="h-full w-full overflow-hidden"
              />
            </div>
            <div className="flex flex-col justify-between gap-10">
              <div className="flex flex-col gap-3">
                <p className="text-3xl font-bold">15 Ratti Amethyst</p>
                <p>Represent Magic | Mystery | Royalty | Good Judgment.</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold">RS 7000</p>
                  <p className="text-xl line-through">RS 7000</p>
                  <p className="text-2xl font-bold text-red-700">**% OFF</p>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-6">
                <p className="text-3xl font-bold">Select Addons</p>
                <div className="grid grid-cols-4  gap-4 md:gap-6 lg:grid-cols-4 ">
                  {card.map((item, index) => (
                    <div key={index} className="">
                      <div className="rounded-md border-2 border-[#DC6563]">
                        <Link href={item?.url}>
                          <img
                            className="h-full h-[92px] w-[94px]"
                            src={item?.img}
                            alt=""
                          />
                          <p className=" rounded-b-sm bg-[#DC6563] text-center font-bold text-white">
                            Rs.{item?.name}
                          </p>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 py-10 text-white">
            <Link
              href="/"
              className="rounded-[10px]  bg-[#e2e0e0] px-8 py-3 font-semibold  md:px-16"
            >
              Add To Cart
            </Link>
            <Link
              href="/"
              className="rounded-[10px] bg-gradient-to-b from-[#fb7038] to-[#df625b] px-8 py-3 font-semibold  md:px-16"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default DetailsGemstone;
