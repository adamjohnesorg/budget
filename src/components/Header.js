import React, { useState } from 'react'

const Header = ({ darkMode }) => 
{
  return (
    <div className={`${darkMode ? "bg-gray-900" : "bg-white"}
        flex justify-center items-center sm:h-16 h-1/6 max-h-1/6`}>
      <div className={`${darkMode ? "text-white" : "text-black"}
        flex lg:justify-center items-center text-4xl h-5/6 w-full`}>
        <div className='w-2/12'></div>
        <div className='w-full sm:w-8/12 text-center'>
          <span>BudgetBuddy</span>
        </div>
        <div className='w-2/12'>
          <div>
            <button>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header