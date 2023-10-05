import React from "react";
import Slide from "./Slide";

function Partnered({ data, slide, height, style }: any) {
  return (
    <div className="bg-[#007DC50A] py-20">
      <div className="container 2xl:max-w-[1180px] mx-auto">
        <Slide data={data} slide={slide} height={height} style={style} />
      </div>
    </div>
  );
}

export default Partnered;
