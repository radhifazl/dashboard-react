import React from 'react'
import DashboardLogo from '../../assets/logo.svg'
import { RxDashboard } from 'react-icons/rx'
import { BiDetail, BiLogOut, BiUser } from 'react-icons/bi'
import { BsTools } from 'react-icons/bs'
import { FaUsersGear } from 'react-icons/fa6'
import { IoDocumentTextSharp } from 'react-icons/io5'
import { IoIosTimer } from 'react-icons/io'
import { AiOutlineSetting } from 'react-icons/ai'

const SidebarItem = ({ children, text, isActive, isExpanded }) => {
    return (
        <div className={` 
            cursor-pointer mb-10
            flex items-center gap-5 hover:text-primary-blue transition duration-200
            ${isExpanded ? 'flex-row' : 'flex-col'}
        `}>
            <div className="sidebar__item-icon">
                {children}
            </div>
            <div className="text -mt-3 text-center">
                <h4>
                    {text}
                </h4>
            </div>
        </div>
    )
}

const Sidebar = () => {
  return (
    <div className='pt-10 w-[98px] h-screen overflow-auto bg-base-component no-scrollbar'>
        <div className="logo mb-20 flex justify-center">
            <img src={DashboardLogo} alt="Logo FCC" />
        </div>

        <div className="sidebar__items">
            <SidebarItem text='Dashboard'>
                <RxDashboard size={30}/>
            </SidebarItem>

            <SidebarItem text='Detail'>
                <BiDetail size={30}/>
            </SidebarItem>

            <SidebarItem text='Maintenance'>
                <BsTools size={30}/>
            </SidebarItem>

            <SidebarItem text='Master Data'>
                <IoDocumentTextSharp size={30}/>
            </SidebarItem>

            <SidebarItem text='Activity'>
                <IoIosTimer size={30}/>
            </SidebarItem>

            <SidebarItem text='Management User'>
                <FaUsersGear size={30}/>
            </SidebarItem>

            <SidebarItem text='Account'>
                <BiUser size={30}/>
            </SidebarItem>

            <SidebarItem text='Setting'>
                <AiOutlineSetting size={30}/>
            </SidebarItem>

            <SidebarItem text='Logout'>
                <BiLogOut size={30}/>
            </SidebarItem>
        </div>
    </div>
  )
}

export default Sidebar