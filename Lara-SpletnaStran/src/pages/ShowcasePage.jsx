import React from 'react'
import { ShowcaseVideo } from '../components/mini/ShowcaseVideo'

const video1 = {
  videoUrl: "https://pagedone.io/asset/uploads/1705298724.mp4",
  title: "Naslov1",
  description: "Koncert bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
}

const video2 = {
  videoUrl: "https://pagedone.io/asset/uploads/1705298724.mp4",
  title: "Naslov2",
  description: "Koncert bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
}

const video3 = {
  videoUrl: "https://pagedone.io/asset/uploads/1705298724.mp4",
  title: "Naslov3",
  description: "Koncert bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
}

const video4 = {
  videoUrl: "https://pagedone.io/asset/uploads/1705298724.mp4",
  title: "Naslov4",
  description: "Koncert bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
}

const videos = [video1, video2, video3, video4];

export const ShowcasePage = () => {
  return (
    <div className="min-h-screen w-full bg-base-200 pt-20 space-y-4 grid grid-cols-1 gap-10 p-5 md:grid-cols-2">
      {videos.map((video, index) => (
        <ShowcaseVideo key={index} video={video} />
      ))}
    </div>
  )
}
