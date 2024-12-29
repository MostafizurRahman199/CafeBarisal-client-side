import React from 'react'

const SectionHeading = ({title1, title2}) => {
  return (
    <div className='my-8 flex flex-col items-center justify-center gap-4'>
      <p className='text-[#D99904]'>{title1}</p>
      <h1 className='text-3xl border-t-2 border-b-2 py-2 border-[#E8E8E8]'>{title2}</h1>
    </div>
  )
}

export default SectionHeading