import React from 'react'

export const ShowcaseVideo = ({ video }) => {
  return (
    <div className="w-4/5 mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex items-stretch hover:shadow-2xl transition duration-300">
      {/* Levo - opis */}
      <div className="w-2/5 p-8 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-neutral-800 mb-4">{video.title}</h2>
        <p className="text-neutral-600 leading-relaxed">{video.description}</p>
      </div>

      {/* Desno - video */}
      <div className="w-3/5">
        <video
          className="w-full h-full object-cover"
          controls
        >
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
