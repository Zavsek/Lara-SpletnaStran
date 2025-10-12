import React from 'react'
import Stats from '../components/Stats'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useRef } from 'react'
import { IoChevronDownOutline } from "react-icons/io5";


const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  const drugiDelRef = useRef(null);
  const tretjiDelRef = useRef(null);

  const scrollToNext = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block:"center" });
  };



  

  return (
    <div  >
      
      {/* 1. del */}
    <div  className="w-full  pt-40 pb-10 px-10 flex gap-5 transition-all duration-500 hover:scale-101 ">  
      <div data-aos='fade-up' className=" rounded-sm bg-base-100 shadow-lg p-3 border-1 border-gray-300/80 flex-1">
        
          <h1 className={` font-primary text-3xl  text-neutral-600 pb-5 `}>
            Življenjepis
          </h1>
          <p className='text-xl font-secondary '>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
            ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
            duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
            vivamus fringilla lacus nec metus bibendum egestas...
                     Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
            ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
            duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
            vivamus fringilla lacus nec metus bibendum egestas...
          </p>
        <button onClick={()=> scrollToNext(drugiDelRef)} className=' w-full text-xl font-secondary pt-5 italic no-underline relative bottom-0 flex justify-center cursor-pointer hover:underline transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'><IoChevronDownOutline  className='pt-2'/> Preberi več </button>
        
      </div>
      <div  class="divider  lg:divider-horizontal"></div>
      <div data-aos='fade-up' className="flex-1">
        <figure className="h-full">
          <img
            src="https://media.timeout.com/images/106150176/image.jpg"
            alt="Shoes"
            className="w-full h-full object-cover rounded-sm border-1 border-blue-300/50 shadow-lg"
            />
        </figure>
      </div>
    </div>

      {/* 2. del */}
        <div ref={drugiDelRef} className="w-full   pt-10 pb-10 px-10 flex gap-5 transition-all duration-500 hover:scale-101">  
    
      <div  data-aos='fade-up' className="flex-1">
        <figure className="h-full">
          <img
            src="https://cdn.britannica.com/73/189273-050-355658ED/Denali-peak-center-Alaska-Range-North-America.jpg"
            alt="Shoes"
            className="w-full h-full object-cover rounded-sm"
            />
        </figure>
      </div>
        <div data-aos='zoom-in' class="divider  lg:divider-horizontal"></div>
          <div data-aos='fade-up' className=" rounded-sm bg-base-100 shadow-lg p-3 border-1 border-gray-300/80 flex-1">
        
          <h1 className={`  text-3xl font-primary text-neutral-600 pb-5 `}>
            Življenjepis
          </h1>
          <p className='text-xl font-secondary'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
            ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
            duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
            vivamus fringilla lacus nec metus bibendum egestas...
                     Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
            ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
            duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
            vivamus fringilla lacus nec metus bibendum egestas...
          </p>
        <button onClick={()=> scrollToNext(tretjiDelRef)} className=' w-full text-xl pt-5 font-secondary italic no-underline relative bottom-0 flex justify-center cursor-pointer hover:underline transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'><IoChevronDownOutline className='pt-2 '   /> Preberi več </button>
        
      </div>
    </div>

    {/* 3. del */}
    <div ref={tretjiDelRef} className="w-full  pt-10 pb-10 p-5 flex gap-5 transition-all duration-500 hover:scale-101">  
      <div data-aos='fade-up' className=" rounded-sm bg-base-100 shadow-lg p-3 border-1 border-gray-300/80 flex-1">
        
          <h1 className={`  text-3xl font-primary pb-5 text-neutral-600 `}>
            Življenjepis
          </h1>
          <p className='text-xl font-secondary'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
            ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
            duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
            vivamus fringilla lacus nec metus bibendum egestas...
                     Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
            ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
            duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
            vivamus fringilla lacus nec metus bibendum egestas...
          </p>
        
      </div>
      <div  class="divider  lg:divider-horizontal"></div>
      <div data-aos='fade-up' className="flex-1">
        <figure className="h-full">
          <img
            src="https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg"
            alt="Shoes"
            className="w-full h-full object-cover rounded-sm border-1 border-blue-300/50 shadow-lg"
            />
        </figure>
      </div>
    </div>
       {/* 4. del */}
    <div className='w-full pb-10 px-10'>
        <Stats />
    </div>
    </div>
  )
}


export default AboutPage