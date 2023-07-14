import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'

const BarCard = ({title, sortType, children}) => {
  return (
    <div className='bg-base-component rounded-[4px] p-3 overflow-hidden w-[400px] h-[300px]'>
        <div className="bar-header w-full flex justify-between items-center">
            <h3>{title}</h3>

            <span className='flex items-center gap-5 bg-[#2D2E32] p-2 rounded-md'>
                <h5>{sortType}</h5>
                <AiOutlineCalendar size={10}/>
            </span>
        </div>
        <div className="chart w-full h-full flex justify-between items-center">
          { children }
        </div>
    </div>
  )
}

export default BarCard