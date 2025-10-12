import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Carousel({ slides }) {
  let [CurrPicture, SetCurrentPicture] = useState(0);

  let previousSlide = () => {
    if (CurrPicture === 0) SetCurrentPicture(slides.length - 1);
    else SetCurrentPicture(CurrPicture - 1);
  };
  let nextSlide = () => {
    if (CurrPicture === slides.length - 1) SetCurrentPicture(0);
    else SetCurrentPicture(CurrPicture + 1);
  };
  return (
    <div
      className="overflow-hidden relative pt-2"
      style={{ maxHeight: "85vh" }}
    >
      <div
        className={`flex transition ease-out duration-400`}
        style={{ transform: `translateX(-${CurrPicture * 100}%)` }}
      >
        {slides.map((s) => {
          return (
            <img
              className="w-full h-auto flex-shrink-0 object-cover"
              src={s}
            ></img>
          );
        })}
      </div>

      <div className="absolute inset-0 flex items-center justify-between ">
        <button
          onClick={previousSlide}
          className="min-h-[100%] p-2  bg-white-700/10 text-white hover:bg-white/15 cursor-pointer transition-all hover:scale-110"
        >
          <ChevronLeft size={30} />{" "}
        </button>
   <button
          onClick={nextSlide}
          className="min-h-[100%] p-2  bg-white-700/10 text-white hover:bg-white/15 cursor-pointer transition-all hover:scale-110"
        >
          <ChevronRight size={30} />{" "}
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-1 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                SetCurrentPicture(i);
              }}
              key={"circle" + i}
              className={` w-5 h-1 cursor-pointer ${
                i === CurrPicture
                  ? "bg-white"
                  : "bg-gray-700/70 border-1 border-gray-100"
              } hover:shadow-xl transition-all duration-300 hover:scale-120 `}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
