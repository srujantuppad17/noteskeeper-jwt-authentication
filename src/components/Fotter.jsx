import React from 'react'

const Fotter = () => {
  return (
    <div className='bg-gray-600 text-gray-400 py-4 border-t border-gray-800'>
      <div className='text-center tesxt-sm'>
{ new Date().getFullYear()}<span className='text-blue-500 font-semibold '>
  NotesKeeper
</span>
.All rights reserved
      </div>

    </div>
  )
}

export default Fotter