import React from "react";
import family from "../../assests/sandra-family.webp";
import play from "../../assests/play-pause-stop.svg";
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const BlueSection2 = () => {
  return (
    <div>
        <div className="bg-blue-900 py-10 grid grid-cols-1 md:grid-cols-2 ">
      <div className="md:ml-40">
        <h1 className="font-bold text-white mb-3 mx-auto flex items-center justify-center">
          Serious fun for every kid
        </h1>
        <div className="mx-auto flex items-center justify-center mb-1 p-3 text-white text-center">
          <p>
            {" "}
            KiwiCo was founded by a mom AND engineer, with a mission to inspire
            the next generation of innovators and problem solvers through
            seriously fun hands-on projects. Since 2011, KiwiCo has delivered
            over 40 million crates to kids of different ages, interests, and
            abilities, all around the world.
          </p>
        </div>
        <div className="mx-auto flex items-center justify-center">
          <a href="https://www.kiwico.com/about-us#founding-story" className="text-white">
            Learn more about the KiwiCo story <br />
            and how a crate comes to life ➜
          </a>
        </div>
      </div>
      <div className="mt-2 w-8/12 mx-auto flex items-center justify-center">
        <img src={family} alt="family" />
      </div>
    </div>
  
    </div>
  );
};

export default BlueSection2;
