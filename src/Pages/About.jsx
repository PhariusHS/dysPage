import React from "react";
import Flota1 from "../assets/images/Flota1.jpg";
import { Mision, Choice, Ethic } from "../assets/SVGS";


function About() {
  return (
    <section className="relative h-full md:h-screen w-full flex  items-center justify-center mt-[6rem] md:mt-[16rem] xl:mt-[12rem] mb-[6rem] md:mb-[24rem] xl:mb-[10rem]">
      <article className="flex lg:flex-row flex-col items-center justify-center  ">
        <div className="flex flex-col xl:mx-20 mx-5  mb-14">
          <span className="font-bold text-xl mb-5">¿Quienes somos?</span>
          <figure className="h-auto max-w-[42rem] rounded-lg shadow-xl">
            <img
              src={Flota1}
              alt=""
              className="w-[30rem] h-[20rem] md:w-[42rem] md:h-[42rem] md:max-w-2xl md:max-h-[42rem] rounded-lg"
            />
          </figure>
        </div>

        <div className="flex flex-col xl:mr-20 xl:ml-20 ml-10 mr-10 md:max-h-full ">
          <div className="mb-8 xl:mb-24">
            <span className="font-extrabold text-2xl flex items-center">
             <Mision className="w-[45px] h-[45px] mr-5"/>  Nuestra misión
            </span>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              mollitia offiti voluptate ipsam itaque eum, at vero, pariatur
              accusamus! Laborum adipisci ullam accusamus qui.
            </p>
            <div className="flex-grow border-t border-[#ff2f2f] z-10"></div>
          </div>
          <div className="mb-8 xl:mb-24">
            <span className="font-extrabold text-2xl  flex items-center">
             <Choice className="w-[45px] h-[45px] mr-5"/> ¿Por qué elegirnos?
            </span>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              mollitia offiti voluptate ipsam itaque eum, at vero, pariatur
              accusamus! Laborum adipisci ullam accusamus qui.
            </p>
            <div className="flex-grow border-t border-[#ff2f2f] z-10"></div>{" "}
          </div>
          <div className="mb-8 xl:mb-24">
            <span className="font-extrabold text-2xl  flex items-center">
      
             <Ethic  className="w-[45px] h-[45px] mr-5"/> Nuestra ética
            </span>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              mollitia offiti voluptate ipsam itaque eum, at vero, pariatur
              accusamus! Laborum adipisci ullam accusamus qui.
            </p>
            <div className="flex-grow border-t border-[#ff2f2f] z-10"></div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;
