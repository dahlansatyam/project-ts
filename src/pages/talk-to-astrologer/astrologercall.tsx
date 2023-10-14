import AstrologerDetails from "@/components/appoinments/AstrologerDetails";
import Calling from "@/components/talk-to-astrologer/Calling";
import MoreAstro from "@/components/talk-to-astrologer/MoreAstro";
import React from "react";

type Props = {};

const astrologercall = (props: Props) => {
  return (
    <div className="lg:flex">
      <MoreAstro />
      <Calling name="ABHA" />
      <AstrologerDetails
        name="Anupam"
        speciality="Vedic, Vastu, Face reading "
        rate="Rate your experience"
        language="English, Hindi, Punjabi "
        experience=" 3 years"
      />
    </div>
  );
};

export default astrologercall;
