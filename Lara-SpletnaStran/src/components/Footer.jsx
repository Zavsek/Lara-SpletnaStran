import React from 'react'
import { Facebook, Instagram,Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer className="bg-white w-full rounded-lg shadow-sm  dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex">
        
                <Link to='https://facebook.com' className='hover:underline pr-5'><Facebook/></Link>
           
                <Link to='https://facebook.com' className='hover:underline pr-5'><Instagram/></Link>
            
                <Link to='https://facebook.com' className='hover:underline pr-5'><Youtube/></Link>
            
    </div>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to="/about" className="hover:underline me-4 md:me-6">Življenjepis</Link>
        </li>
        <li>
            <Link to="/Showcase" className="hover:underline me-4 md:me-6">Showcase</Link>
        </li>
        <li>
            <Link to="/offering" className="hover:underline me-4 md:me-6">Ponudba</Link>
        </li>
        <li>
            <Link to="/contact" className="hover:underline">Kontakt</Link>
        </li>
    </ul>
    </div>
</footer>
  )
}

export default Footer