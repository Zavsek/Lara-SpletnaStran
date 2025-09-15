import React from 'react'

const Stats = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 my-8">
      <div className="border-t border-gray-200 dark:border-gray-600">
        <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
          <div className="grid grid-cols-2 gap-4 md:gap-6 p-4 text-gray-900 dark:text-white w-full">
            {/* Prva vrstica z dvema elementoma */}
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <dt className="mb-2 text-2xl md:text-3xl font-extrabold text-blue-600">20+</dt>
              <dd className="text-sm md:text-base text-gray-500 dark:text-gray-400 text-center">Let izkušenj</dd>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <dt className="mb-2 text-2xl md:text-3xl font-extrabold text-blue-600">1000+
              </dt>
              <dd className="text-sm md:text-base text-gray-500 dark:text-gray-400 text-center">Nastopov</dd>
            </div>
            
            {/* Druga vrstica z dvema elementoma */}
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <dt className="mb-2 text-2xl md:text-3xl font-extrabold text-blue-600">1M+</dt>
              <dd className="text-sm md:text-base text-gray-500 dark:text-gray-400 text-center">bla bla bla</dd>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <dt className="mb-2 text-2xl md:text-3xl font-extrabold text-blue-600">90+</dt>
              <dd className="text-sm md:text-base text-gray-500 dark:text-gray-400 text-center">bla bla bla</dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats