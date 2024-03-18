import React from "react";
import Triangle from "/assets/triangle.png";
import data from "./data";

export const task1 = () => {
  return (
    <div className="overflow-hidden flex flex-col  items-center justify-center gap-10">
      <div className="flex justify-around p-12 md:flex-row flex-col gap-10">
        <div>
          <h1 className="w-[10em] text-[2.375rem] leading-none text-[400] md:w-[10em] gap-[20rem] w-[40rem]">
            Our Digital Marketing Process
          </h1>
          <p class="text-[1.237rem] text-[#363636] md:w-[35rem] w-[25em] mt-5">
            Instead of relying on the whims or myths, we create our strategy
            after studying the numbers of your industry and understanding the
            psychology of your target audience. Be it SMM, SEO, or PPC, we
            leverage our extensive experience to set your brand apart.
          </p>
        </div>
        <div className="w-[40rem] bg-gray-100 border-solid p-12">
          <h2 className="capitalize text-[1.625em] font-bold text-center mb-10">
            Key Highlights Our Work In Numbers.
          </h2>
          <div className="flex justify-center gap-8 ">
            <div className="flex flex-col text-center">
              <h5 className=" text-[#363636]">Happy Clients</h5>
              <p className="font-[600] text-[#e3204a] text-[2em]">265+</p>
            </div>
            <div className="w-[0.5px] h-20 bg-gray-600"></div>
            <div className="flex flex-col text-center">
              <h5 className=" text-[#363636]">Projects Completed</h5>
              <p className="font-[600] text-[#e3204a] text-[2em]">325+</p>
            </div>
            <div className="w-[0.5px] h-20 bg-gray-600"></div>
            <div className="flex flex-col text-center">
              <h5 className=" text-[#363636]">Years of experience</h5>
              <p className="font-[600] text-[#e3204a] text-[2em]">20+</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 tab:grid-cols-2 p-12 gap-20">
            {data?.map((item, index) => (
              <div className="w-[15rem] h-[20rem] m-auto border-solid hover:bg-gray-300 cursor-pointer mx-auto _parent-hover rounded-xl ">
                
                <div className="flex justify-center items-center p-4 w-16 h-16 bg-gray-400 rounded-xl ">
                  <img src={item?.img} alt="megaphone" />
                </div>
                <h1 className="text-[#363636] font-[600] text-[2.1875rem]">
                  {item?.heading}
                </h1>
                <ul>
                  <li className="flex items-center p-2">
                    <img src={Triangle} className="p-2" />
                    <p>{item?.shop}</p>
                  </li>
                  <li className="flex items-center p-2">
                    <img src={Triangle} className="p-2" />
                    <p> {item?.store} </p>
                  </li>
                  <li className="flex items-center p-2">
                    <img src={Triangle} className="p-2"/>
                    <p> {item?.score}</p>
                  </li>
                  <li className="flex items-center p-2">
                    <img src={Triangle} className="p-2"/>
                    <p> {item?.search} </p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default task1;
