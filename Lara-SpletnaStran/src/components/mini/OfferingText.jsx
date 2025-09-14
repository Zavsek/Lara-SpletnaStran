import React from 'react'

export const OfferingText = ({ Text, Image }) => {
  return (
    <div className="relative w-full min-h-150 rounded-b-2xl overflow-hidden shadow-lg ">
      {/* Slika v ozadju */}
      <img
        src={Image}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (temnenje slike) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Besedilo čez sliko */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <p className="text-white text-xl text-shadow-lg pt-5 leading-relaxed">
          {Text}
        </p>
      </div>
    </div>
  )
}
