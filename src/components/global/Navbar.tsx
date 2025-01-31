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

import { FaBars, FaUserAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartDrawer from "../shop/minicart/CartDrawer";
import MainPage from "../shop/minicart/MainPage";
import { useRouter } from "next/navigation";
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: any; // Replace 'any' with a more specific type if available
      };
    };
  }
}
type Props = {};

type Links = {
  name: string;
  url: string;
  googleTranslateElementInit: () => void;
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
  const GoogleTranslateComponent = () => {
    useEffect(() => {
      const checkIfScriptExists = document.getElementById(
        "google-translate-script"
      );
      if (checkIfScriptExists === null) {
        const googleTranslateScript = document.createElement("script");
        googleTranslateScript.id = "google-translate-script";
        googleTranslateScript.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        googleTranslateScript.async = true;

        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en", // Change this to set the default language
              includedLanguages: "ta,bn,ml,hi,en", // Limit translation to Tamil, Bengali, Malayalam, Hindi, English
              autoDisplay: false,
            },
            "google_translate_element"
          );
        };

        document.body.appendChild(googleTranslateScript);
      }
    }, []);

    return <div id="google_translate_element"></div>;
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
            <div className="block cursor-pointer text-[16px] lg:hidden ">
              <TemporaryDrawer
                content={<NavMobileData />}
                anchor="left"
                button={<FaBars />}
              />
            </div>

            <div className="">
              <Link href="/" className="text-2xl  ">
                <div className="flex items-center justify-center gap-[7px] md:justify-start">
                  <div className="w-full l">
                    <Image
                      src="/assets/home/logo.png"
                      alt="logo"
                      width={150}
                      height={51}
                      loading={"eager"}
                      className="md:w-[200px] "
                    />
                  </div>
                 
                </div>{" "}
              </Link>
            </div>

            <div className="w-full ">
              <div className=" mt-[10px] hidden justify-end gap-x-5 text-[17px]  lg:flex">
                <Link href="/free-kundli">Free Kundli</Link>
                <Link href="/kundli-matching">Kundli Matching</Link>

              
                <ul className="relative">
  <li
    onMouseEnter={toggleHoroscope}
    onMouseLeave={toggleHoroscope}
    className="flex"
  >
    <button className="flex items-center">
      <span className="mr-1">Horoscope</span>
      <span className={horoScopeOpen ? "transform rotate-180" : ""}>&#9662;</span>
    </button>
    {horoScopeOpen && (
      <ul className="absolute right-0 mt-2  bg-white rounded shadow lg:w-[300px]">
        <li onClick={toggleHoroscope} className="px-2 py-[5px] font-[Roboto]  hover:bg-[#DC6563]">
          <Link href="/horoscope/yearly">Horoscope 2024</Link>
        </li>
        <li onClick={toggleHoroscope} className="px-2 py-[5px] font-[Roboto]  hover:bg-[#DC6563]">
          <Link href="/horoscope/daily">Today's Horroscope</Link>
        </li>
        <li onClick={toggleHoroscope} className="px-2 py-[5px] font-[Roboto]  hover:bg-[#DC6563]">
          <Link href="/horoscope/daily">Weekly Horoscope</Link>
        </li>
        <li onClick={toggleHoroscope} className="px-2 py-[5px] font-[Roboto]  hover:bg-[#DC6563]">
          <Link href="/horoscope/monthly">Monthly Horoscope</Link>
        </li>
        <li onClick={toggleHoroscope} className="px-2 py-[5px] font-[Roboto]  hover:bg-[#DC6563]">
          <Link href="/horoscope/yearly">Yearly Horoscope</Link>
        </li>
        <li onClick={toggleHoroscope} className="px-2 py-[5px] font-[Roboto]  hover:bg-[#DC6563]">
          <Link href="/horoscope/daily">Daily Horoscope</Link>
        </li>
        <li onClick={toggleHoroscope} className="px-2 py-[5px] font-[Roboto]  hover:bg-[#DC6563]">
          <Link href="/horoscope/tomorrow">Tomorrow's Horoscope</Link>
        </li>
        <li onClick={toggleHoroscope} className="px-2 py-[5px] font-[Roboto]  hover:bg-[#DC6563]">
          <Link href="/horoscope/yesterday">Yesterday's Horoscope</Link>
        </li>
        <li onClick={toggleHoroscope} className="px-2 py-[5px] font-[Roboto]  hover:bg-[#DC6563]">
          <Link href="/chines-horoscope">Chinese Horoscope</Link>
        </li>
      </ul>
    )}
  </li>
</ul>

                <ul className="">
                  <GoogleTranslateComponent />
                </ul>

                <div className=" flex   text-base  ">
                  {!isLogged ? (
                    <button
                      onClick={() => {
                        setIsOpen(true);
                      }}
                    >
                      {/* <div className="flex rounded-[17px] bg-[#DC6563] transform hover:translate-y-[-5px] transition-transform duration-300 ease-out px-2 py-[4px] text-white"> */}
                      <div className="flex transform gap-2 rounded-[17px] bg-[#DC6563]  px-3 text-[16px] text-white transition-transform duration-300 ease-out hover:translate-y-[-5px] hover:bg-[#DC6563] ">
                        <div className="flex items-center  py-2  ">
                          <FaUserAlt />
                        </div>
                        <p className="flex items-center ">Login</p>
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
                          className="w-full rounded-full border-[1px] border-[#DC6563] object-contain"
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
              <div className="  mt-[10px] mb-[10px] hidden justify-end gap-x-8 text-[17px]  lg:flex  ">
                <Link href="/chat-with-astrologer/chat-with-astrologer">
                  Chat with Astrologer
                </Link>
                <Link href="/talk-to-astrologer/talk-to-astrologer">
                  Talk to Astrologer
                </Link>
                <Link href="/shop/shop">Astroseva Shop</Link>
                {/* <Link href="/astrosevatalk">AstrosevaTalk +</Link> */}
                <Link href="/book-a-pooja/book-pooja">Book a Pooja</Link>
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
