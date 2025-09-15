import {ArrowLeft, ArrowRight} from 'lucide-react'
import { useState } from 'react';


export default function Carousel({slides}){

    let[CurrPicture, SetCurrentPicture] = useState(0);

    let previousSlide =() =>{
        if(CurrPicture === 0) SetCurrentPicture(slides.length- 1);
        else SetCurrentPicture(CurrPicture -1)
    }
        let nextSlide =() =>{
        if(CurrPicture === slides.length -1) SetCurrentPicture(0);
        else SetCurrentPicture(CurrPicture +1)
    }
    return <div className="overflow-hidden relative pt-14" style={{ maxHeight: '80vh' }}>
        <div className={`flex transition ease-out duration-400`}
        style={{transform : `translateX(-${CurrPicture * 100}%)`}}>

        {slides.map((s) =>{
            return <img
            className="w-full h-auto flex-shrink-0 object-cover" 
            src={s}></img>;
        })}
        </div>

        <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={previousSlide}
          className="p-2 rounded-full bg-gray-700/30 text-white hover:bg-black/40 transition-all hover:scale-110"
        >
          <ArrowLeft size={25} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-gray-700/30 text-white hover:bg-black/40 transition-all hover:scale-110"
        >
          <ArrowRight size={25} />
        </button>
      </div>

        <div className='absolute bottom-0 py-4 flex justify-center gap-1 w-full'>
            {slides.map((s, i) =>{
              return(   
              <div
              onClick={() =>{
                SetCurrentPicture(i);
              }} 
              key={"circle" +i}
              className={`rounded-xs w-5 h-1 cursor-pointer ${i===CurrPicture ? "bg-white" : "bg-gray-700/70 border-1 border-gray-100"} transition-all duration-300 hover:scale-120 hover:shadow-2xl`}>

              </div>);
            })}
        </div>
    </div>
}