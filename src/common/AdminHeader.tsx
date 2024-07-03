import React from 'react'
import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { FaAngleDown, FaRegBell } from 'react-icons/fa';
import HeaderNotification from './HeaderNotification';

function AdminHeader() {
    const notificationData = [
        {notifyLink:'#',notifyTitle:'Your Order Has Been Shipped', notifyDes:'Order No: 123456 Has Shipped To Your Delivery Address',noficeTime:'5 min ago'}
    ]
  return (
    <>
        <div className='atmosphere-header flex items-center justify-between h-[70px] px-[30px] bg-[#316863]'>
            <div className="humburger">
                <Link href='' className='border border-white border-solid flex justify-center items-center rounded-[0.375rem] w-[48px] h-[40px] transition-all duration-500 hover:bg-[rgba(0,0,0,0.2)]'><IoMenu className='text-white text-[23px]'/></Link>
            </div>
            <div className='right-top-header h-full flex items-center justify-end'>
                <div className="notifications me-6 h-full">
                <DropdownMenu>
                    <DropdownMenuTrigger className='focus:bottom-0 focus:outline-none focus:shadow-none focus-visible:bottom-0 focus-visible:outline-none focus-visible:shadow-none h-full'><span className='flex items-center text-white'><FaRegBell className='text-white text-[23px] me-2'/> <FaAngleDown /></span></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <HeaderNotification notificationData={notificationData}/>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminHeader