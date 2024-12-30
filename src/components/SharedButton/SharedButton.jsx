import React from 'react'

const SharedButton = ({title="Button", path="/"}) => {
  return (
    <div className="text-center my-8">
    <button className="px-6 py-2 text-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 border-b-4 border-black">
      {title}
    </button>
  </div>
  )
}

export default SharedButton