import React from 'react'
import Carousel from '../components/Carousel';
import AboutShort from '../components/AboutShort';
import OfferingShort from '../components/OfferingShort';
import ShowcaseShort from '../components/ShowcaseShort';
import Stats from '../components/Stats';

const HomePage = () => {

  let slides=[
    "https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg",
    "https://cdn.britannica.com/73/189273-050-355658ED/Denali-peak-center-Alaska-Range-North-America.jpg",
    "https://media.timeout.com/images/106150176/image.jpg",
    "https://images.squarespace-cdn.com/content/v1/5e8ee22524984c387cdaed27/f4ec0ded-9ff4-406e-8dd1-5f0fe74e48bf/Denali%2C+Alaska.jpg"
  ]
  return (
  <div className='w-full m-auto'>
    <div className='w-[80%] m-auto pb-10'>
    <Carousel  slides={slides} />
    </div>
    <div className='w-[80%] m-auto pb-10 flex justify-center'>
      <AboutShort />
    </div>
    <div className='w-[80%] m-auto pb-10'>
    <Stats />
    </div>
      <div className='w-[80%] m-auto pb-10'>
    <ShowcaseShort  />
    </div>
      <div className='w-[80%] m-auto pb-10'>
    <OfferingShort   />
    </div>

  </div>
  
  );

};
export default HomePage;