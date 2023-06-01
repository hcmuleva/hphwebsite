import React from "react";
import sparkles from "../../assests/sparkles.svg";
import box from "../../assests/box.svg";
import expert from "../../assests/expert.svg";
import kid from "../../assests/kid.svg";
import subjects from "../../assests/subjects.svg";

const WhyPeople = () => {
  return (
    <div className="bg-yellow-50 py-5">
      <div className="mx-auto my-3 flex text-center justify-center">
        <h1 className="font-bold">Why people find KiwiCo awesome <img src={sparkles} alt="sparkles" className="inline"/> </h1>
      </div>

      <div className="   mt-1 md:flex-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-5 py-1 md:gap-3 md:mx-36">
        <div>
          <h3 style={{ color: "rgb(0, 171, 95)" }} className="font-bold"> <img src={expert} alt="expert" className="inline"/> 10+ years</h3>
          <p>of developing & delivering awesome experiences around the world</p>
        </div>
        <div className="">
          <h3 style={{ color: "rgb(0, 171, 95)" }} className="font-bold"> <img src={kid} alt="kid" className="inline"/> 1000+ hours</h3>
          <p>of thoughtful design & kid-testing behind every single crate</p>
        </div>
        <div className="">
          <h3 style={{ color: "rgb(0, 171, 95)" }} className="font-bold"><img src={subjects} alt="subjects" className="inline"/> 9 lines</h3>
          <p>of monthly discoveries for kids of all ages & interests!</p>
        </div>
        <div className="">
          <h3 style={{ color: "rgb(0, 171, 95)" }} className="font-bold"><img src={box} alt="box" className="inline"/> 2000+ projects</h3>
          <p>to shop at the KiwiCo Store!</p>
        </div>
      </div>
    </div>
  );
};

export default WhyPeople;
