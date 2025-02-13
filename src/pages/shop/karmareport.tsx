import React, { useState } from "react";
import Hero from "@/components/common/Hero";
import LoveForm from "@/components/shop/lovescore/LoveForm";
import LoveScore from "@/components/shop/lovescore/LoveScore";
import { HomeIcon } from "@heroicons/react/24/solid";
import Section from "@/components/Section";
import KarmaReport from "@/components/shop/karmareport/KarmaReport";
import { BsFillCartFill } from "react-icons/bs";
import Cart from "@/components/shop/karmareport/Cart";
type Props = {};

const karmareport = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover bg-repeat">
      {/* <Hero text="Karma Report" /> */}

      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              Astroseva Shop
            </p>
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              Karma Report
            </p>
          </div>
        </Section>
      </div>
      <div className="pt-[30px]">
        <p className="text-center text-[30px] font-bold "> Karma Report</p>
      </div>
      <Cart />
      <KarmaReport />
    </div>
  );
};

export default karmareport;
