import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  image: string;
  spec: string;
};

const SimilarConsultantsCard = ({ name, image, spec }: Props) => {
  return (
    <div className="flex h-[174px] w-[186px]  items-center justify-center rounded-[20px] shadow-lg">
      <div className="">
        <Image
          src="/assets/admin/Dashboard_image.png"
          alt="astrologers"
          width={75}
          height={75}
          className="flex   items-center justify-center"
        />

        <div className="">
          <p className="text-center font-bold">{name}</p>
          <p className="text-center text-[12px] font-bold">{spec}</p>
        </div>
      </div>
    </div>
  );
};

export default SimilarConsultantsCard;
