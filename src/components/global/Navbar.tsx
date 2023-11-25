// import Image from "next/image";
// import Link from "next/link";
// import Section from "../Section";
// import { useEffect, useState } from "react";
// import LoginModal from "../LoginModal";
// import { toast } from "react-toastify";
// import PopoverComp from "../common/Popover";
// import TemporaryDrawer from "../common/Drawer";
// // @ts-ignore
// import Cookies from "js-cookie";
// import NavMobileData from "../NavMobileData";
// import { useRouter } from "next/router";
// import { FaBars } from "react-icons/fa";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import CartDrawer from "../shop/minicart/CartDrawer";
// import MainPage from "../shop/minicart/MainPage";
// type Props = {};

// type Links = {
//   name: string;
//   url: string;
// };

// function Navbar({}: Props) {
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLogged, setIsLogged] = useState(false);
//   const [horoScopeOpen, setHoroScopeOpen] = useState(false);
//   const [languageOpen, setLanguageOpen] = useState(false);

//   useEffect(() => {
//     const accessToken = Cookies.get("accessToken");
//     const refreshToken = Cookies.get("refreshToken");
//     if (accessToken && refreshToken) {
//       setIsLogged(true);
//     }
//   }, []);
//   const handleLogout = () => {
//     Cookies.remove("accessToken");
//     Cookies.remove("refreshToken");
//     toast.success("Logout successfully");
//     setIsLogged(false);
//   };

//   const toggleHoroscope = () => {
//     setHoroScopeOpen((prev) => !prev);
//   };
//   const toggleLanguage = () => {
//     setLanguageOpen((prev) => !prev);
//   };
//   const toggleLogin = () => {
//     setIsLogged((prev) => !prev);
//   };
//   return (
//     <>
//       {isOpen && (
//         <LoginModal
//           setIsLogged={setIsLogged}
//           isOpen={isOpen}
//           setIsOpen={setIsOpen}
//         />
//       )}

//       <div className="sticky top-0 z-10 w-full bg-white shadow-xl ">
//         <Section>
//           <div className="flex items-center  py-2 px-2">
//             <div className="block cursor-pointer text-[25px] lg:hidden ">
//               <TemporaryDrawer
//                 content={<NavMobileData />}
//                 anchor="left"
//                 button={<FaBars />}
//               />
//             </div>

//             <div className="">
//               <Link href="/" className="text-2xl font-black ">
//                 <div className="flex items-center justify-center gap-[7px] md:justify-start">
//                   <div className="w-[15%]">
//                     <Image
//                       src="/assets/home/logo.png"
//                       alt="logo"
//                       width={103}
//                       height={103}
//                       loading={"eager"}
//                     />
//                   </div>
//                   <p>AstroSevaTalk</p>
//                 </div>{" "}
//               </Link>
//             </div>

//             <div className="w-full ">
//             <div className=" mt-[16px] hidden w-full  font-bold  lg:flex float-right">
//                 <Link href="/free-kundli">Free Kundli</Link>
//                 <Link href="/kundli-matching">Kundli Matching</Link>

//                 {/* <Link href="live-astrologer/live-astrologer">
//                   Live Astrologers
//                 </Link> */}
//                 {/* <Link href="/horoscope/today">Horoscope</Link> */}

//                 <ul className="">
//                   <li className="">
//                     <button className="flex    " onClick={toggleHoroscope}>
//                       <span className="">Horoscope</span>
//                       <span className={horoScopeOpen ? " transform" : ""}>
//                         &#9662;
//                       </span>
//                     </button>
//                     {horoScopeOpen && (
//                       <ul className="">
//                         <div className="relative  z-10 px-2 shadow-xl">
//                           <div className="absolute rounded-[20px] bg-white lg:w-[300px]">
//                             <div className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]">
//                               <li onClick={toggleHoroscope}>
//                                 <Link href="/horoscope/yearly">
//                                   Horoscope 2023
//                                 </Link>
//                               </li>
//                             </div>

//                             <li
//                               onClick={toggleHoroscope}
//                               className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]"
//                             >
//                               <Link href="/horoscope/daily">{`Today's Horroscope`}</Link>
//                             </li>

//                             <li
//                               onClick={toggleHoroscope}
//                               className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]"
//                             >

//                               <Link href="/horoscope/daily">
//                                 Weekly Horoscope
//                               </Link>
//                             </li>
//                             <li
//                               onClick={toggleHoroscope}
//                               className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]"
//                             >
//                               <Link href="/horoscope/monthly">
//                                 Monthly Horoscope
//                               </Link>
//                             </li>
//                             <li
//                               onClick={toggleHoroscope}
//                               className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]"
//                             >
//                               <Link href="/horoscope/yearly">
//                                 Yearly Horoscope
//                               </Link>
//                             </li>
//                             <li
//                               onClick={toggleHoroscope}
//                               className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]"
//                             >
//                               <Link href="/horoscope/daily">
//                                 Daily Horoscope
//                               </Link>
//                             </li>
//                             <li
//                               onClick={toggleHoroscope}
//                               className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]"
//                             >
//                               <Link href="/horoscope/tomorrow">
//                                 {`Tomorrow's Horoscope`}
//                               </Link>
//                             </li>
//                             <li
//                               onClick={toggleHoroscope}
//                               className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]"
//                             >
//                               <Link href="/horoscope/yesterday">
//                                 {`Yesterday's Horoscope`}
//                               </Link>
//                             </li>
//                           </div>
//                         </div>
//                       </ul>
//                     )}
//                   </li>
//                 </ul>
//                 <ul className="">
//                   <li className="">
//                     <button className="flex    " onClick={toggleLanguage}>
//                       <span className="">Language</span>
//                       <span className={languageOpen ? " transform" : ""}>
//                         &#9662;
//                       </span>
//                     </button>
//                     {languageOpen && (
//                       <ul className="">
//                         <div className="relative  z-10 px-2 shadow-xl">
//                           <div className="absolute  bg-white shadow-xl lg:w-[100px]">
//                             <div className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]">
//                               <li onClick={toggleLanguage}>
//                                 <Link href="/horoscope/yearly">
//                                  Eng
//                                 </Link>
//                               </li>
//                             </div>

//                             <li
//                               onClick={toggleLanguage}
//                               className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]"
//                             >
//                               <Link href="/horoscope/daily">Hindi</Link>
//                             </li>

//                           </div>
//                         </div>
//                       </ul>
//                     )}
//                   </li>
//                 </ul>

//                 {/* <Link href="/muhurat">Shubh Muhurat</Link> */}

//                 <div className=" flex   text-base  ">
//                   {!isLogged ? (
//                     <button
//                       onClick={() => {
//                         setIsOpen(true);
//                       }}
//                     >
//                       <Image
//                         src="/assets/home/login.svg"
//                         alt={"chat-icon"}
//                         width={10}
//                         height={10}
//                         loading={"lazy"}
//                         className="w-full object-contain"
//                       />
//                     </button>
//                   ) : (
//                     <PopoverComp
//                       button={
//                         <Image
//                           src="/assets/home/user.png"
//                           alt={"chat-icon"}
//                           width={30}
//                           height={40}
//                           loading={"lazy"}
//                           className="w-full object-contain"
//                         />
//                       }
//                       content={
//                         <div className="flex flex-col gap-2 whitespace-nowrap px-5 py-5 text-left font-normal text-[black] ">
//                           <Link href="/notification">
//                             <div className="cursor-pointer">Notificaton</div>
//                           </Link>
//                           <Link href="/">
//                             <div className="cursor-pointer">
//                               Wallet Transactions
//                             </div>
//                           </Link>
//                           <Link href="/astrologeradmin/astrosevatalkhistory">
//                             <div className="cursor-pointer">Order History</div>
//                           </Link>
//                           <Link href="/astrologeradmin/customersupport">
//                             <div className="cursor-pointer">
//                               Customer Support Chat
//                             </div>
//                           </Link>

//                           <div
//                             onClick={handleLogout}
//                             className="cursor-pointer"
//                           >
//                             Logout
//                           </div>
//                           <Link href="/notification">
//                             <div className="cursor-pointer">
//                               Logout From Other Devices
//                             </div>
//                           </Link>
//                         </div>
//                       }
//                     />
//                   )}

//                   <div className="mt-2">{/* <MainPage /> */}</div>
//                 </div>
//               </div>
//               <div className=" mt-[38px] hidden justify-evenly  px-12 font-bold lg:flex  ">
//               <Link href="/chat-with-astrologer/chat-with-astrologer">
//                   Chat With Astrologer
//                 </Link>
//                 <Link href="/talk-to-astrologer/talk-to-astrologer">
//                   Talk To Astrologer
//                 </Link>
//                 <Link href="/shop/shop">Astrosevamall</Link>
//                 {/* <Link href="/astrosevatalk">AstrosevaTalk +</Link> */}
//                 <Link href="/book-a-pooja/book-pooja">Book A Pooja</Link>
//                 <Link href="/blog">Blog</Link>
//                 {/* <Link href="/zodic-sign">Zodiac sign</Link> */}

//               </div>

//             </div>
//           </div>
//         </Section>
//       </div>
//     </>
//   );
// }

// export default Navbar;

import Image from "next/image";
import Link from "next/link";
import Section from "../Section";
import { useEffect, useState } from "react";
import LoginModal from "../LoginModal";
import { toast } from "react-toastify";
import PopoverComp from "../common/Popover";
import TemporaryDrawer from "../common/Drawer";
// @ts-ignore
import Cookies from "js-cookie";
import NavMobileData from "../NavMobileData";
import { useRouter } from "next/router";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartDrawer from "../shop/minicart/CartDrawer";
import MainPage from "../shop/minicart/MainPage";
type Props = {};

type Links = {
  name: string;
  url: string;
};

function Navbar({}: Props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [horoScopeOpen, setHoroScopeOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");
    if (accessToken && refreshToken) {
      setIsLogged(true);
    }
  }, []);
  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    toast.success("Logout successfully");
    setIsLogged(false);
  };

  const toggleHoroscope = () => {
    setHoroScopeOpen((prev) => !prev);
  };
  const toggleLanguage = () => {
    setLanguageOpen((prev) => !prev);
  };
  const toggleLogin = () => {
    setIsLogged((prev) => !prev);
  };
  return (
    <>
      {isOpen && (
        <LoginModal
          setIsLogged={setIsLogged}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}

      <div className="sticky top-0 z-10 w-full bg-white shadow-xl ">
        <Section>
          <div className="flex items-center  py-2 px-2">
            <div className="block cursor-pointer text-[25px] lg:hidden ">
              <TemporaryDrawer
                content={<NavMobileData />}
                anchor="left"
                button={<FaBars />}
              />
            </div>

            <div className="">
              <Link href="/" className="text-2xl font-black ">
                <div className="flex items-center justify-center gap-[7px] md:justify-start">
                  <div className="w-[25%]">
                    <Image
                      src="/assets/home/logo.png"
                      alt="logo"
                      width={123}
                      height={203}
                      loading={"eager"}
                    />
                  </div>
                  <p className="font-[ Roboto] text-[30px] font-[900]">
                    AstroSevaTalk
                  </p>
                </div>{" "}
              </Link>
            </div>

            <div className="w-full ">
              <div className=" mt-[10px] hidden justify-end gap-x-8 text-[16px] font-bold lg:flex">
                <Link href="/free-kundli">Free Kundli</Link>
                <Link href="/kundli-matching">Kundli Matching</Link>

                {/* <Link href="live-astrologer/live-astrologer">
                  Live Astrologers
                </Link> */}
                {/* <Link href="/horoscope/today">Horoscope</Link> */}

                <ul className="">
                  <li className="">
                    <button className="flex    " onClick={toggleHoroscope}>
                      <span className="">Horoscope</span>
                      <span className={horoScopeOpen ? " transform" : ""}>
                        &#9662;
                      </span>
                    </button>
                    {horoScopeOpen && (
                      <ul className="">
                        <div className="relative  z-10 px-2 shadow-xl">
                          <div className="absolute rounded-[20px] bg-white lg:w-[300px]">
                            <div className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]">
                              <li onClick={toggleHoroscope}>
                                <Link href="/horoscope/yearly">
                                  Horoscope 2023
                                </Link>
                              </li>
                            </div>

                            <li
                              onClick={toggleHoroscope}
                              className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]"
                            >
                              <Link href="/horoscope/daily">{`Today's Horroscope`}</Link>
                            </li>

                            <li
                              onClick={toggleHoroscope}
                              className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]"
                            >
                              <Link href="/horoscope/daily">
                                Weekly Horoscope
                              </Link>
                            </li>
                            <li
                              onClick={toggleHoroscope}
                              className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]"
                            >
                              <Link href="/horoscope/monthly">
                                Monthly Horoscope
                              </Link>
                            </li>
                            <li
                              onClick={toggleHoroscope}
                              className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]"
                            >
                              <Link href="/horoscope/yearly">
                                Yearly Horoscope
                              </Link>
                            </li>
                            <li
                              onClick={toggleHoroscope}
                              className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]"
                            >
                              <Link href="/horoscope/daily">
                                Daily Horoscope
                              </Link>
                            </li>
                            <li
                              onClick={toggleHoroscope}
                              className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]"
                            >
                              <Link href="/horoscope/tomorrow">
                                {`Tomorrow's Horoscope`}
                              </Link>
                            </li>
                            <li
                              onClick={toggleHoroscope}
                              className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]"
                            >
                              <Link href="/horoscope/yesterday">
                                {`Yesterday's Horoscope`}
                              </Link>
                            </li>
                          </div>
                        </div>
                      </ul>
                    )}
                  </li>
                </ul>
                <ul className="">
                  <li className="">
                    <button className="flex    " onClick={toggleLanguage}>
                      <span className="">Eng</span>
                      <span className={languageOpen ? " transform" : ""}>
                        &#9662;
                      </span>
                    </button>
                    {languageOpen && (
                      <ul className="">
                        <div className="relative  z-10 px-2 shadow-xl">
                          <div className="absolute  bg-white shadow-xl lg:w-[100px]">
                            <div className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]">
                              {/* <li onClick={toggleLanguage}>
                                <Link href="/horoscope/yearly">
                                 Eng
                                </Link>
                              </li> */}
                            </div>

                            <li
                              onClick={toggleLanguage}
                              className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]"
                            >
                              <Link href="/horoscope/daily">Hindi</Link>
                            </li>
                          </div>
                        </div>
                      </ul>
                    )}
                  </li>
                </ul>

                {/* <Link href="/muhurat">Shubh Muhurat</Link> */}

                <div className=" flex   text-base  ">
                  {!isLogged ? (
                    <button
                      onClick={() => {
                        setIsOpen(true);
                      }}
                    >
                      <div className="flex rounded-[17px] bg-[#DC6563] px-2 py-[4px] text-white">
                        <div className="flex items-center gap-2 py-2 px-2">
                          <FaUserAlt />
                          {/* <Image
                        src="/assets/home/user-icon.png"
                        alt={"chat-icon"}
                        width={20}
                        height={15}
                        loading={"lazy"}
                        className="w-full object-contain "
                      /> */}
                        </div>
                        <p className="flex items-center">Login</p>
                      </div>
                    </button>
                  ) : (
                    <PopoverComp
                      button={
                        <Image
                          src="/assets/home/user.svg"
                          alt={"chat-icon"}
                          width={30}
                          height={40}
                          loading={"lazy"}
                          className="w-full object-contain"
                        />
                      }
                      content={
                        <div className="flex flex-col gap-2 whitespace-nowrap px-5 py-5 text-left font-normal text-[black] ">
                          <Link href="/notification">
                            <div className="cursor-pointer">Notificaton</div>
                          </Link>
                          <Link href="/">
                            <div className="cursor-pointer">
                              Wallet Transactions
                            </div>
                          </Link>
                          <Link href="/astrologeradmin/astrosevatalkhistory">
                            <div className="cursor-pointer">Order History</div>
                          </Link>
                          <Link href="/astrologeradmin/customersupport">
                            <div className="cursor-pointer">
                              Customer Support Chat
                            </div>
                          </Link>

                          <div
                            onClick={handleLogout}
                            className="cursor-pointer"
                          >
                            Logout
                          </div>
                          <Link href="/notification">
                            <div className="cursor-pointer">
                              Logout From Other Devices
                            </div>
                          </Link>
                        </div>
                      }
                    />
                  )}

                  <div className="mt-2">{/* <MainPage /> */}</div>
                </div>
              </div>
              <div className="  mt-[1px] mb-[10px] hidden justify-end gap-x-8 text-[16px] font-bold lg:flex  ">
                <Link href="/chat-with-astrologer/chat-with-astrologer">
                  Chat With Astrologer
                </Link>
                <Link href="/talk-to-astrologer/talk-to-astrologer">
                  Talk To Astrologer
                </Link>
                <Link href="/shop/shop">Astrosevamall</Link>
                {/* <Link href="/astrosevatalk">AstrosevaTalk +</Link> */}
                <Link href="/book-a-pooja/book-pooja">Book A Pooja</Link>
                <Link href="/blog">Blog</Link>
                {/* <Link href="/zodic-sign">Zodiac sign</Link> */}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

export default Navbar;
