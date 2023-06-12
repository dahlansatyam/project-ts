import Section from "@/components/Section";
import { postFetcher } from "@/service";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";

type Props = {
  majorYogni: any;
};

const Yogni = ({ majorYogni }: Props) => {
  const [yogniLevel, setYogniLevel] = useState(0);
  const [levelOne, setLevelOne] = useState({});

  useEffect(() => {
    const kundli = localStorage.getItem("kundliData");
    const majorVdasha = async () => {
      const result = await postFetcher("/sub_yogini_dasha/1/pingla", kundli);
      if (result?.status) {
        setLevelOne(JSON.parse(result?.res && result?.res));
      }
    };
    if (kundli) {
      majorVdasha();
    }
  }, [yogniLevel]);

  return (
    <div className="mb-20 space-y-20">
      <Section>
        <p className="pb-4">Dhanya</p>
        <div className="">
          <div className="w-full rounded-[10px] border-2 border-[#ccc] text-[#212529]">
            <div className=" flex w-full items-center justify-between rounded-t-[10px] bg-[#ffffe0]">
              <p className="w-[33.33%] border-r-2 border-b-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                Planet
              </p>
              <p className="w-[33.33%] border-r-2 border-b-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                Start Date
              </p>
              <p className="w-[33.33%] border-b-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                End Date
              </p>
            </div>
            {yogniLevel === 0 &&
              majorYogni?.slice(0, 8)?.map((item: any, index: any) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setYogniLevel(1);
                    }}
                    className="flex w-full cursor-pointer items-center justify-between rounded-[10px] rounded-t"
                  >
                    <p className="w-[33.33%] border-r-2 border-b-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4 uppercase">
                      {item?.dasha_name && item?.dasha_name.slice(0, 3)}
                    </p>
                    <p className="w-[33.33%] border-r-2 border-b-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                      {item?.start_date && item?.start_date}
                    </p>
                    <p className="flex w-[33.33%] items-center justify-between border-b-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                      {item?.end_date && item?.end_date}
                      <IoMdArrowDropright />
                    </p>
                  </div>
                );
              })}
            {yogniLevel === 1 &&
              majorYogni?.slice(0, 8)?.map((item: any, index: any) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setYogniLevel(1);
                    }}
                    className="flex w-full cursor-pointer items-center justify-between rounded-[10px] rounded-t"
                  >
                    <p className="w-[33.33%] border-r-2 border-b-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4 uppercase">
                      {item?.dasha_name && item?.dasha_name.slice(0, 3)}
                    </p>
                    <p className="w-[33.33%] border-r-2 border-b-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                      {item?.start_date && item?.start_date}
                    </p>
                    <p className="flex w-[33.33%] items-center justify-between border-b-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                      {item?.end_date && item?.end_date}
                      <IoMdArrowDropright />
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
        {Boolean(yogniLevel) && (
          <div
            onClick={() => {
              setYogniLevel(yogniLevel - 1);
            }}
            className="mx-auto my-5 w-fit cursor-pointer rounded border bg-[#ffffe0] py-2 px-5 text-center"
          >
            Level Up
          </div>
        )}
      </Section>
    </div>
  );
};

export default Yogni;
