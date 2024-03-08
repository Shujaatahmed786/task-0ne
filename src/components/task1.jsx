import React from "react";
import Triangle from "/assets/triangle.png";
import data from "./data";

export const task1 = () => {
  return (
    <div>
      <div className="max-w-[90rem] m-auto flex justify-center gap-12 p-12">
        <div>
          <h1 className="w-[10em] text-[2.75rem] leading-none text-[400]">
            Our Digital Marketing Process
          </h1>
          <p className="text-[1rem] text-[#363636] w-[25rem] mt-5">
            Instead of relying on the whims or myths, we create our strategy
            after studying the numbers of your industry and understanding the
            psychology of your target audience. Be it SMM, SEO, or PPC, we
            leverage our extensive experience to set your brand apart.
          </p>
        </div>
        <div className="w-[35rem]  bg-gray-100 border-solid p-4">
          <h2 className="capitalize text-[1.625em] text-center mb-10">
            Key Highlights Our Work In Numbers.
          </h2>
          <div className="flex justify-center gap-4 ">
            <div className="flex flex-col text-center">
              <h5 className=" text-[#363636]">Happy Clients</h5>
              <p className="font-[600] text-[#e3204a] text-[3.33em]">265+</p>
            </div>
            <div className="w-[0.5px] h-20 bg-gray-600"></div>
            <div className="flex flex-col text-center">
              <h5 className=" text-[#363636]">Projects Completed</h5>
              <p className="font-[600] text-[#e3204a] text-[3.33em]">325+</p>
            </div>
            <div className="w-[0.5px] h-20 bg-gray-600">
            
            </div>
            <div className="flex flex-col text-center">
              <h5 className=" text-[#363636]">Years of experience</h5>
              <p className="font-[600] text-[#e3204a] text-[3.33em]">20+</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 items-center m-10 border-solid ">
        {data?.map((item, index) => (
          <div className="w-[18rem] h-[20rem] m-auto border-solid hover:bg-gray-300  cursor-pointer _parent-hover rounded-xl">
            <div className=" flex justify-center items-center  w-16 h-16 bg-gray-400">
              <img src={item?.img} alt="megaphone" />
            </div>
            <h1 className="text-[#363636] font-[600] text-[2.1875rem] p-5 ">
            
              {item?.heading}
            </h1>
            <ul className="">
              <li className="flex items-center p-2">
                <img src={Triangle} />
                <p>{item?.shop}</p>
              </li>
              <li className="flex items-center p-2">
                <img src={Triangle} />
                <p> {item?.store} </p>
              </li>
              <li className="flex items-center p-2">
                <img src={Triangle} />
                <p> {item?.score}</p>
              </li>
              <li className="flex items-center p-2">
                <img src={Triangle} />
                <p> {item?.search} </p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default task1;
