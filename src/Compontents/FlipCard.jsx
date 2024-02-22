import React from "react";

function FlipCard(props) {
  return (
    <article className="w-[400px] h-[520px] bg-transparent group perspective md:mx-10 my-5 hover:cursor-help">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
        <div className="absolute border-2 w-full h-full backface-hidden">
          <img src={props.FrontImg} className="w-full h-full" />
        </div>

        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-300">
          <div className="flex flex-col items-center justify-center h-full text-gray-600">
            <span className="font-bold text-xl my-5">{props.title}</span>

            <p className="px-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              maiores nemo aspernatur necessitatibus id officiis perferendis
              sunt recusandae laboriosam quasi quibusdam quisquam quos tempore
              velit, vero, ab temporibus at totam.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default FlipCard;
