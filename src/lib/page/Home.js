import React, { useState } from "react";
function Index() {
  return (
    <div className="py-12 bg-gray-100 overflow-y-hidden">
      <dh-component>
        <div className="w-full px-6">
           <img
              className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg"
              alt="bg"
            />
          <div className="mt-8 relative rounded-lg bg-zinc-900
 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
            <img
              className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg"
              alt="bg"
            />
            <img
              className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg"
              alt="bg"
            />
            <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">
                Welcome to the world of walker
              </h1>
            </div>
            <div className="flex justify-center items-center mb-10 sm:mb-20">
             
            </div>
          </div>
          <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
            <div className="relative sm:w-2/3 w-11/12">
              <img
                src="https://i.ytimg.com/vi/5JRs76bOy2w/maxresdefault.jpg"
                alt="Sample Page"
                role="img"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </dh-component>
    </div>
  );
}

export default Index;
