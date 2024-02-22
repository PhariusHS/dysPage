import React from "react";
import FlotaHome from "../assets/images/FlotaHome.jpg";
import { ArrowDown } from "../assets/SVGS";

function Home() {
  return (
    <section className="  flex flex-col justify-center items-center w-full  h-screen bg-gray-500 ">
      <img className=" w-full  h-screen absolute blur-xs" src={FlotaHome} />
      <article>
        <div className="flex flex-row justify-center items-center ">
          <span className="text-[#ff3232] md:text-[200px] text-8xl font-extrabold  font-outline-1 z-10">
            D
          </span>
          <span className="text-[#ff3232] md:text-[180px] text-7xl font-extrabold  font-outline-1 z-10">
            &
          </span>
          <span className="text-[#ff3232] md:text-[200px] text-8xl font-extrabold font-outline-1 z-10">
            S
          </span>
        </div>

        <div className="flex">
          <span className="text-[#ff3232] md:text-[150px]  text-7xl font-semibold font-['Inter'] z-10">
            Logística
          </span>
        </div>

        <div className="relative flex py-10 ">
          <div className="flex-grow border-t-4 border-yellow-400 z-10"></div>
        </div>
      </article>

      <article className=" text-[#e4c94e] md:text-6xl text-4xl font-bold font-['Inter'] flex text-center z-10 ">
       <h1> Fletes baratos, seguros y rapidos. </h1>
      </article>

      <ArrowDown className=" md:w-[50px] md:h-[50px] w-[35px] h-[35px] mt-40 z-10" />
    </section>
  );
}

export default Home;
