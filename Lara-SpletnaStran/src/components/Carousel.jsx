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
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <ArrowLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <ArrowRight size={32} />
        </button>
      </div>

        <div className='absolute bottom-0 py-4 flex justify-center gap-5 w-full'>
            {slides.map((s, i) =>{
              return(   
              <div
              onClick={() =>{
                SetCurrentPicture(i);
              }} 
              key={"circle" +i}
              className={`rounded-full w-3 h-3 cursor-pointer ${i===CurrPicture ? "bg-white" : "bg-gray-300"} transition-transform hover:scale-120 hover:shadow-2xl`}>

              </div>);
            })}
        </div>
    </div>
}