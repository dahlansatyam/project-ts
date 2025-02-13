import React, { useState } from "react";
import Section from "../Section";
import { FaEye, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { card } from "../../../utils/list";
import SideNavBlog from "./SideNavBlog";

type Props = {
  count: string;
};

const Blog = ({ count }: Props) => {
  const itemsPerPage = 24;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(card.length / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`${
            currentPage === i ? "bg-blue-500 text-white" : "bg-white text-black"
          } rounded py-2 px-4`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = card.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]  bg-cover bg-repeat py-[30px]">
      {/* <Section> */}

      <div className="justify-between  gap-6 md:flex lg:flex ">
        <SideNavBlog />

        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaSearch />
            <p>Let’s find what you are looking for</p>
          </div>
          <hr className=" w-full  border border-[#D9D9D9] shadow-xl" />
          <div className="gap-5 px-6 pt-6  md:grid md:grid-cols-1  md:px-16  lg:grid lg:grid-cols-3 lg:px-1 lg:pr-[50px] ">
            {currentItems.map((item, index) => (
              <Link
                key={index}
                href={`/blog/${item?.id}`}
                className="relative mt-5 rounded-[20px] border-r-[3px] border-b-[3px] border-[#DC6563] bg-white shadow-xl"
              >
                <img
                  className=" w-full   rounded-t-[20px] object-cover  object-top "
                  src={item?.img}
                  alt=""
                />
                <div className="eye absolute top-10  left-[220px] flex gap-2 rounded-[17px] bg-[#dbd3cf] px-2 py-1  md:top-3 md:right-3 lg:top-3  lg:right-3">
                  <FaEye />
                  <p className="text-[12px]">{count}</p>
                </div>
                <div className="">
                  <div className="flex    flex-col gap-4 p-3 ">
                    <p className=" blog2 overflow-x-hidden">{item?.text}</p>
                    <div className="flex items-center justify-between text-[12px] text-slate-500">
                      <p>Kasturi Chaudhary</p>
                      <p>March 31, 2023</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            {totalPages > 1 && renderPageNumbers()}
          </div>
        </div>
      </div>
      {/* </Section> */}
    </div>
  );
};

export default Blog;
