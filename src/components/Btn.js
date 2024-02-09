import React from 'react'

const Btn = ({name}) => {
  return (
    <div className=''>
      <button className='px-4 py-1 m-1 bg-gray-200 rounded-lg cursor-pointer'>{name}</button>
    </div>
  )
}

export default Btn
