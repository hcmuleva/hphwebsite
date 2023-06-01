import React from "react";
import image1 from "../../assests/grid-img1.jpg";
import image2 from "../../assests/grid-img2.jpg";
import merch from "../../assests/merch-holiday.webp";
import engi from "../../assests/engineering-awesome.gif";


const ImageText = () => {
  return (
    <div>
      <div className="bg-yellow-50 py-5">
        <div className="mt-2 md:flex-row grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 py-1 md:gap-0 md:mx-30 sm:mx-20">
          <div>
            <img src={image1} alt="image1" className=""/>
          </div>
          <div className="bg-orange-500 text-center pt-10 text-white opacity-90">
            <p className="px-2 md:px-3 md:pt-5 text-sm md:text-2xl  ">
              Our designers <b>brainstorm hundreds of ideas </b>to create the
              most exciting projects that are also age-appropriate and
              educational.
            </p>
          </div>
          <div>
            <img src={image2} alt="image2" />
          </div>
          <div className="bg-blue-700 text-white pt-10 opacity-90">
            <p className="px-2 md:px-3 md:pt-5 text-sm md:text-2xl">
              <b> We design and test until we get our products right.</b>
              Everything from quality to safety is looked at so we can deliver
              your kids an awesome experience!
            </p>
          </div>
        </div>
        <div className="mt-16 md:flex-row grid grid-cols-1 md:grid-cols-2 py-1 md:gap-4 md:mx-40">
           <div className="mt-2">
             <img src={merch} alt="merch" />
           </div>
           <div className="mt-2">
            <img src={engi} alt="engi" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default ImageText;
