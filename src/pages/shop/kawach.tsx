import React from "react";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import Hero from "@/components/common/Hero";
import KawachCard from "@/components/shop/kawach/KawachCard";

type Props = {};

const kawach = (props: Props) => {
  return (
    <div>
      <Hero text="Dus-mahavidhya-kawach Products" icon="" />

      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium">
              Dus-mahavidhya-kawach Products
            </p>
          </div>
        </Section>
      </div>
      <KawachCard />
    </div>
  );
};

export default kawach;
