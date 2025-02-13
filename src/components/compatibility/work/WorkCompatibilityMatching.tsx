import Image from "next/image";
import Link from "next/link";
import React, { Key } from "react";
import Section from "../../Section";

type Props = {
  // btn:string;
};

const WorkCompatibilityMatches = ({}: Props) => {
  return (
    <Section>
      <div className="space-y-6 py-8  ">
        <div className="text-center text-[36px] font-bold">
          More Work Compatibility Matches
        </div>
        <div className=" flex flex-wrap justify-center gap-20 ">
          <div>
            <div className="text-[22px] font-bold">Virgo Compatibility</div>
            <div>VIRGO AND ARIES</div>
            <div>VIRGO AND TAURUS</div>
            <div>VIRGO AND GEMINI</div>
            <div>VIRGO AND CANCER</div>
            <div>VIRGO AND LEO</div>
            <div>VIRGO AND VIRGO</div>
            <div>VIRGO AND LIBRA</div>
            <div>VIRGO AND SCORPIO</div>
            <div>VIRGO AND SAGITTARIUS</div>
            <div>VIRGO AND CAPRICON</div>
            <div>VIRGO AND AQUARIUS</div>
          </div>
          <div>
            <div className=" text-[22px] font-bold">Taurus Compatibility</div>
            <div>VIRGO AND ARIES</div>
            <div>VIRGO AND TAURUS</div>
            <div>VIRGO AND GEMINI</div>
            <div>VIRGO AND CANCER</div>
            <div>VIRGO AND LEO</div>
            <div>VIRGO AND VIRGO</div>
            <div>VIRGO AND LIBRA</div>
            <div>VIRGO AND SCORPIO</div>
            <div>VIRGO AND SAGITTARIUS</div>
            <div>VIRGO AND CAPRICON</div>
            <div>VIRGO AND AQUARIUS</div>
          </div>
        </div>
      </div>
      {/* <div>{subText}</div> */}
    </Section>
  );
};

export default WorkCompatibilityMatches;
