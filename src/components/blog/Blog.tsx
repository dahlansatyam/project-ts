// import React from "react";
// import Section from "../Section";
// import { FaSearch } from "react-icons/fa";
// import Link from "next/link";
// import { card } from "../../../utils/list";
// import SideNavBlog from "./SideNavBlog";

// type Props = {};

// const Blog = (props: Props) => {
//   return (
//     <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover bg-repeat py-8 lg:py-[51px]">
//       <Section>
//         <div className="flex items-start justify-between gap-6">
//           <SideNavBlog />

//           <div className="flex w-full flex-col gap-2">
//             <div className="flex items-center gap-2">
//               <FaSearch />
//               <p>Let’s find what you are looking for</p>
//             </div>
//             <hr className=" mr-5 w-full border border-[#D9D9D9]" />
//             <div className="grid grid-cols-3 gap-5 pt-6">
//               {card.map((item, index) => (
//                 <Link
//                   key={index}
//                   href={`/blog/${item?.id}`}
//                   className="flex w-[286px] flex-col  rounded-[20px] bg-[#FFF7E5]"
//                 >
//                   <img
//                     className="h-[151px] w-full rounded-t-[20px] object-cover object-top"
//                     src={item?.img}
//                     alt=""
//                   />
//                   <div className="flex flex-col gap-4 p-3">
//                     <p className=" text-lg font-bold">{item?.text}</p>
//                     <div className="flex items-center justify-between text-[12px] text-slate-500">
//                       <p>Kasturi Chaudhary</p>
//                       <p>March 31,2023</p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// };

// export default Blog;

import React, { useState } from "react";
import Section from "../Section";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { card } from "../../../utils/list";
import SideNavBlog from "./SideNavBlog";

type Props = {};

const Blog = (props: Props) => {
  const itemsPerPage = 10;
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
    <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover bg-repeat py-8 lg:py-[51px]">
      <Section>
        <div className="justify-between  gap-6 md:flex lg:flex lg:items-start">
          <SideNavBlog />

          <div className="flex w-full flex-col gap-2">
            <div className="flex items-center gap-2">
              <FaSearch />
              <p>Let’s find what you are looking for</p>
            </div>
            <hr className=" w-full border border-[#D9D9D9] shadow-xl" />
            <div className="grid pt-6 md:px-16  lg:grid-cols-3 lg:gap-5 lg:px-1 ">
              {currentItems.map((item, index) => (
                <Link
                  key={index}
                  href={`/blog/${item?.id}`}
                  className="flex w-[286px] flex-col rounded-[20px] bg-white"
                >
                  <img
                    className="h-[151px] w-full rounded-t-[20px] object-cover object-top"
                    src={item?.img}
                    alt=""
                  />
                  <div className="flex flex-col gap-4 p-3">
                    <p className="text-lg font-bold">{item?.text}</p>
                    <div className="flex items-center justify-between text-[12px] text-slate-500">
                      <p>Kasturi Chaudhary</p>
                      <p>March 31, 2023</p>
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
      </Section>
    </div>
  );
};

export default Blog;
