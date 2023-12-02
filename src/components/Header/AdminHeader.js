import Settings from 'components/Settings'
import React from 'react'

const ProjectHeader = () => {
  return (
    <div className='flex py-3 ps-4 w-full bg-[#2B466F]'>
        <div className="w-full">
          <span className='text-small-regular text-white'>
            Admin Dashboard 
            </span> 
        </div>
        <div className="w-40 flex justify-end pe-3">
           <Settings/>
        </div>
      </div>
  )
}

export default ProjectHeader