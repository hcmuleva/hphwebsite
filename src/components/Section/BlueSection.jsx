import React from "react";
import bulb from "../../assests/lightbulb-new.svg";
import crates from "../../assests/crates.webp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const BlueSection = () => {
  return (
    <div className="bg-blue-700 py-16 grid grid-cols-1 md:grid-cols-2 ">
      <div className="">
        <h1 className="font-bold text-white mb-5 mx-auto flex items-center justify-center">
          Let's find the perfect crate <br /> for you!{" "}
        </h1>
        <div className="mx-auto flex items-center justify-center mb-3">
          <h4 className="bg-white inline py-2 px-3 text-blue-700 font-bold text-base">
            <img src={bulb} alt="bulb" className="bg-white p-1 inline" /> Take
            the quiz{" "}
            <div className="pl-16">
              <ArrowRightAltIcon style={{ fontSize: "250%" }} />
            </div>
          </h4>
        </div>
      </div>
      <div className="mt-2 mx-auto flex items-center justify-center w-9/12">
        <img src={crates} alt="crates" />
      </div>
    </div>
  );
};

export default BlueSection;
