import React from 'react'
import { ShowcaseVideo } from '../components/mini/ShowcaseVideo'

const video1 = {
  videoUrl: "https://pagedone.io/asset/uploads/1705298724.mp4",
  title: "Naslov1",
  description: "Koncert bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
}

export const ShowcasePage = () => {
  return (
    <div className="min-h-screen w-full bg-base-200 pt-20 space-y-12 pb-8">


      <ShowcaseVideo video={video1} />
      <ShowcaseVideo video={video1} />
      <ShowcaseVideo video={video1} />
    </div>
  )
}
