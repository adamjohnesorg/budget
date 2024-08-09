import React from 'react'

const Nav = ({ darkMode }) => {
  return (
    <div className={`${ darkMode ? true : false}
        flex sm:flex-col w-full sm:gap-y-0.5 justify-evenly items-center sm:h-40 h-12 sm:pl-2 sm:pr-2`}>
        <div className={`${ darkMode ? "bg-opacity-90" : "bg-opacity-50"}
        flex sm:w-full w-3/12 h-full sm:h-8 bg-blue-500 items-center justify-center`}>Route1</div>
        <div className='flex sm:w-full w-3/12 h-full sm:h-8 bg-red-500 items-center justify-center'>Route2</div>
        <div className='flex sm:w-full w-3/12 h-full sm:h-8 bg-green-500 items-center justify-center'>Route3</div>
        <div className='flex sm:w-full w-3/12 h-full sm:h-8 bg-pink-500 items-center justify-center'>Route4</div>
    </div>
  )
}

export default Nav