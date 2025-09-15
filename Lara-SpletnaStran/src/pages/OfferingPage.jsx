import React from 'react'
import { OfferingCard } from '../components/mini/OfferingCard'
import { Gem, School, Music4 } from 'lucide-react'
import { OfferingText } from '../components/mini/OfferingText'

const text = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas..."
const OfferingPage = () => {
  return (
    <div className='w-screen px-15 pt-20 pb-5 gap-10 grid grid-cols-3'>
        <div className='w-full  rounded-3xl lg: max-h-80'>
            <OfferingCard Icon={Gem} Title={"Poroke"} Text={"Najami me za svojo poroko"}/>
            <OfferingText Text={text} Image={"https://c8.alamy.com/comp/2HAENNG/a-vertical-shot-of-a-beautiful-outdoor-wedding-venue-2HAENNG.jpg"} className="pt-10"/>
            </div>
        <div className='w-full'>
        <OfferingCard Icon={School} Title={"Učenje Harfe"} Text={"Učenje harfe za Mlajše in strejše"}/>
        <OfferingText Text={text} Image={"https://i0.wp.com/ismw.org/wp-content/uploads/2020/11/IMG2.jpg?resize=550%2C600&ssl=1"} className="pt-10"/>
        </div>

        <div className='w-full'>
            <OfferingCard Icon={Music4} Title={"Igranje po naročilu"} Text={"Naroči me da igram na prizorišču po tvoji izbiri"}/>
            <OfferingText Text={text} Image={"https://img.freepik.com/premium-photo/performers-stage-beautifully-lit-theater-classical-music-concept_223582-10455.jpg"} className="pt-10"/>
            </div>
    </div>
  )
}

export default OfferingPage