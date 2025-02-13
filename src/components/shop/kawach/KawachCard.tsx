import React from "react";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

const card = [
  {
    img: "/assets/shop/kawach/Apar Dhan Prapti Kawach.svg",
    name: "896",
    para: "Apar Dhan Prapti Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Baglamukhi Kawach.svg",
    name: "896",
    para: "Baglamukhi Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Bhubaneshwari Kawach.svg",
    name: "896",
    para: "Bhubaneshwari Kawach",
    url: "",
  },
  {
    img: "/assets/shop/Kawach/Brahaspati Kawach.svg",
    name: "896",
    para: "Brahaspati Kawach",
    url: "",
  },
  {
    img: "/assets/shop/Kawach/Budh Grah Kawach.svg",
    name: "896",
    para: "Budh Grah Kawach",
    url: "",
  },
  {
    img: "/assets/shop/Kawach/Chandra Kawach.svg",
    name: "896",
    para: "Chandra Kawach",
    url: "",
  },
  {
    img: "/assets/shop/Kawach/Chinnamastika Kawach.svg",
    name: "896",
    para: "Chinnamastika Kawach",
    url: "",
  },
  {
    img: "/assets/shop/Kawach/Dakni Kawach.svg",
    name: "896",
    para: "Dakni Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Devi Tripura Sinduri Kawach.svg",
    name: "896",
    para: "Devi Tripura Sinduri Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Dhanodha Kawach.svg",
    name: "896",
    para: "Dhanodha Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Dhumavati Kawach.svg",
    name: "896",
    para: "Dhumavati Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Durgaji Kawach.svg",
    name: "896",
    para: "Durgaji Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Ganesh Kawach.svg",
    name: "896",
    para: "Ganesh Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Kawach Consultation Offer.svg",
    name: "896",
    para: "Kawach Consultation Offer",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Ketu Kawach.svg",
    name: "896",
    para: "Ketu Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Lalita Kawach.svg",
    name: "896",
    para: "Lalita Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Laxmi Kawach.svg",
    name: "896",
    para: "Laxmi Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Mahakali Kawach.svg",
    name: "896",
    para: "Mahakali Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Mahamrityunajy Kawach.svg",
    name: "896",
    para: "Mahamrityunajy Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Manchaha Karm Kawach.svg",
    name: "896",
    para: "Machaha Karm",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Mangal Kawach.svg",
    name: "896",
    para: "Mangal Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Manglik Kawach.svg",
    name: "896",
    para: "Manglik Kawach",
    url: "",
  },

  {
    img: "/assets/shop/kawach/Mohini Kawach.svg",
    name: "896",
    para: "Mohini Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Mrit Sanjeevani Kawach.svg",
    name: "896",
    para: "Mrit Sanjeevani Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Nav Grah Shanti Kawach.svg",
    name: "896",
    para: "Nav Grah Shanti Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Nazar Raksha Kawach.svg",
    name: "896",
    para: "Nazar Raksha Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Neel Saraswati Kawach.svg",
    name: "896",
    para: "Neel Saraswati Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Pitr Dosh Nivaran Kawach.svg",
    name: "896",
    para: "Pitr Dosh Nivaran Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Rahu Kawach.svg",
    name: "896",
    para: "Rahu Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Shani Grah Shanti Kawach.svg",
    name: "896",
    para: "Shani Grah Shanti Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Shigra Vivha Kawach.svg",
    name: "896",
    para: "Shigra Vivha Kawach",
    url: "",
  },

  {
    img: "/assets/shop/kawach/Shukra Grah Kawach With 2,21000 Mantra Jaap.svg",
    name: "896",
    para: "Shukra Grah Kawach With 2,21000 Mantra Jaap",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Sri Gopal Kawach.svg",
    name: "896",
    para: "Sri Gopal Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Surya Kawach.svg",
    name: "896",
    para: "Surya Kawach",
    url: "",
  },
  {
    img: "/assets/shop/kawach/Tara Kawach.svg",
    name: "896",
    para: "Tara Vivha Kawach",
    url: "",
  },
];

type Props = {};

const KawachCard = (props: Props) => {
  return (
    <div className="pb-[30px] ">
      <Section>
        <div>
          <div></div>
          <div>
            <div className="mt-[30px] grid  gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {card.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-8 rounded-xl bg-white p-2 shadow-xl"
                >
                  <div className="mx-auto my-auto rounded-[15px] border-2 border-[#DC6563]">
                    <Link href={item?.url}>
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={200}
                        height={170}
                        className=" px-[5px] pt-[5px] "
                      />
                      <p className="rounded-b-[12px] bg-[#DC6563] text-center font-bold text-white">
                        Rs.{item?.name}
                      </p>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="py-4 font-bold">{item?.para}</p>
                    <div className="   flex gap-5">
                      {/* <button className="rounded-md  bg-[#DC6563] px-6 py-2 font-bold text-white ">
                        Add To Cart
                      </button> */}
                      <button className="k rounded-md  bg-gradient-to-b from-[#fb7038] to-[#FF0600] px-6 py-2 font-bold text-white">
                        BUY
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default KawachCard;
