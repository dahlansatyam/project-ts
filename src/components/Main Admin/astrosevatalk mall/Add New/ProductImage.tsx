import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import { RiArrowUpSLine } from "react-icons/ri";

type Props = {};

const ProductImage = (props: Props) => {
  return (
    <div className="mt-5">
      <div className="rounded-[5px] border-[1px]  border-[#A9A9A9] ">
        <div className="flex justify-between">
          <p className="px-2 font-bold">Product Tags</p>

          <div className="flex gap-2 text-[23px] ">
            <RiArrowUpSLine />
            <GoChevronDown />
            <BsFillCaretDownFill />
          </div>
        </div>
        <div className="border-b-[1px] border-[#A9A9A9] "></div>
        <div className=" mt-2 px-2 ">
          <p className=" mt text-[#DC6563] underline ">Select Product Image</p>
        </div>
        <div className="mt-3 border-b-[1px] border-[#A9A9A9] "></div>
        <div className="mb-2 px-2">
          <p className="mt-2 text-justify text-[14px]">
            Separate tags with commas Separate tags with commas Separate tags
            with commas Separate tags with commas
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
