import React from 'react'
import { Gem, School, Music4 } from 'lucide-react'

export const OfferingCard = ({Icon, Title, Text}) => {
  return (
   <div className="flex flex-col items-center justify-center bg-gradient-to-br from-amber-400 to-amber-600  shadow-xl  p-8 text-center transition-transform hover:shadow-2xl min-h-[20rem] w-full">
      
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-white/20 border-2 border-white/40 mb-6">
        <Icon className="w-12 h-12 text-white" />
      </div>

      <h2 className="text-white text-2xl font-bold mb-4 tracking-wide">
        {Title}
      </h2>

      <p className="text-white/90 text-base leading-relaxed max-w-sm">
        {Text}
      </p>
    </div>
  )
}
