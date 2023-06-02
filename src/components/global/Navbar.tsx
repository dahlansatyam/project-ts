/* eslint-disable @next/next/no-img-element */
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
import { FaBars } from "react-icons/fa";
type Props = {};

function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
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
  return (
    <>
      {isOpen && (
        <LoginModal
          setIsLogged={setIsLogged}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}

      <div className="sticky top-0 z-10 w-full bg-[url('/assets/navbar-bg.webp')]">
        <Section>
          <div className="flex items-center justify-between py-2 px-2">
            <div className="block text-[25px] text-[white] md:hidden">
              <TemporaryDrawer
                content={<NavMobileData />}
                anchor="left"
                button={<FaBars />}
              />
            </div>

            <div className="">
              <Link href="/" className="text-2xl font-black text-white">
                <div className="flex items-center justify-center md:justify-start">
                  <div className="w-[15%]">
                    <Image
                      src="/assets/main-logo.svg"
                      alt="logo"
                      width={337}
                      height={348}
                      loading={"eager"}
                    />
                  </div>
                  <p>AstroSevaTalk</p>
                </div>{" "}
              </Link>
            </div>
            <div className=" flex items-center space-x-[27px] text-base font-bold text-white">
              <div className="hidden items-center gap-4 md:flex">
                <p>AstrosevaTalk+</p>
                <p className="">ZodiacSign</p>
              </div>
              {!isLogged ? (
                <button
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  Login
                </button>
              ) : (
                <PopoverComp
                  button={
                    <Image
                      src="/assets/home/user.png"
                      alt={"chat-icon"}
                      width={40}
                      height={40}
                      loading={"lazy"}
                      className="w-full object-contain"
                    />
                  }
                  content={
                    <div className="flex flex-col gap-2 whitespace-nowrap px-5 py-5 text-left font-normal text-[black]">
                      <div className="cursor-pointer">Edit Profile</div>
                      <div onClick={handleLogout} className="cursor-pointer">
                        Logout
                      </div>
                    </div>
                  }
                />
              )}
              {/* onClick={handleLogout} */}
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

export default Navbar;
