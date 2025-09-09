import React from 'react'

export const OfferingText = ({Text, Image}) => {
  return (
    <div className="card bg-base-100 image-full w-full  shadow-sm min-h-150 max-h-100">
  <figure>
    <img
      src={Image}
      alt="Shoes"
      className='w-full h-full' />
  </figure>
  <div className="card-body">
    <p className='text-shadov-lg text-xl'>{Text}</p>
  </div>
</div>
  )
}
