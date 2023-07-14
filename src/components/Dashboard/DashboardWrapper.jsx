import React from 'react'
import DashboardSidebar from './Sidebar'
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSolidBell } from 'react-icons/bi';
import { useState } from 'react';

const Header = ({onClick}) => {
    return (
      <div className={`
        header py-2 rounded-xl px-5 w-full lg:flex justify-between items-center bg-base-component mb-3 
      `}>
        <div className="header-title flex items-center gap-5 max-md:justify-between max-md:mb-5">
            <div className="hamburger cursor-pointer hover:text-primary-blue transition" onClick={onClick}>
                <GiHamburgerMenu size={20}/>
            </div>
            <h1 className='uppercase max-md:text-sm max-sm:text-xs '>Digitalization Line Production</h1>
        </div>

        <div className="header-right flex items-center max-md:justify-between lg:gap-10 max-md:gap-5">
            <div className="date-time font-normal flex items-center">
                <h1 className='max-md:text-sm max-sm:text-xs border-r-4 border-white pr-3'>FRIDAY, 23 DECEMBER 2022</h1>
                <h1 className='max-md:text-sm max-sm:text-xs pl-3'>11:21:01</h1>
            </div>

            <div className="notification-bell rounded-md cursor-pointer bg-[#1D232C] p-3">
                <BiSolidBell size={20}/>
            </div>
        </div>
      </div>
    )
}

const Footer = () => {
    return (
      <div className='footer w-full text-xs p-2'>
        Copyright @  2023 PT. Electrindo Inti Dinamika
      </div>
    )
}

const DashboardWrapper = ({ children }) => {
  const [expand, setExpand] = useState(false)

  const expandSidebar = () => {
    setExpand(!expand)
  }

  return (
    <div className='w-full h-full flex items-start'>
        <DashboardSidebar isExpanded={expand}/>
        <div className="w-full h-full dashboard__content p-2 overflow-hidden">
            <Header onClick={expandSidebar}/>
            <main className="dashboard__content__body h-[83vh] overflow-auto flex flex-wrap justify-between items-center gap-3">
                {children}
            </main>
            <Footer />
        </div>
    </div>
  )
}

export default DashboardWrapper