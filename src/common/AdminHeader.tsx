"use client"
import React,{useState} from 'react'
import Link from 'next/link';
import { IoLockClosed, IoMenu } from 'react-icons/io5';
import { HiOutlineMail } from "react-icons/hi";
import {DropdownMenu,DropdownMenuContent,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { FaRegBell } from 'react-icons/fa';
import HeaderNotification from './HeaderNotification';
import HeaderEmail from './HeaderEmail';
import { IoIosArrowDown } from 'react-icons/io';
import Image from 'next/image';
import profileImg from '@/assets/images/john-cornors.jpg'
import UserNavs from './UserNavs';
import { ImUser } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { RiLogoutBoxRFill } from "react-icons/ri";
import { IconType } from 'react-icons';
interface NotificationData{
    notifyLink:string;
    notifyTitle:string;
    notifyDes:string;
    noficeTime:string;
}
interface EmailData{
    notifyLink:string;
    notifyTitle:string;
    notifyDes:string;
    noficeTime:string;
}
interface userNavData{
    navIcon:IconType;
    navName:string;
    userNavLink:string;
}
function AdminHeader() {
    const notificationData:NotificationData[] = [
        {notifyLink:'#',notifyTitle:'Your Order Has Been Shipped', notifyDes:'Order No: 123456 Has Shipped To Your Delivery Address',noficeTime:'5 min ago'},
        {notifyLink:'#',notifyTitle:'Your Order Has Been Shipped', notifyDes:'Order No: 123456 Has Shipped To Your Delivery Address',noficeTime:'5 min ago'},
        {notifyLink:'#',notifyTitle:'Your Order Has Been Shipped', notifyDes:'Order No: 123456 Has Shipped To Your Delivery Address',noficeTime:'5 min ago'},
        {notifyLink:'#',notifyTitle:'Your Order Has Been Shipped', notifyDes:'Order No: 123456 Has Shipped To Your Delivery Address',noficeTime:'5 min ago'},
        {notifyLink:'#',notifyTitle:'Your Order Has Been Shipped', notifyDes:'Order No: 123456 Has Shipped To Your Delivery Address',noficeTime:'5 min ago'}
    ]
    const emailData:EmailData[] = [
        {notifyLink:'#',notifyTitle:'Your order is delivered soon', notifyDes:'You will receive the next update when the item in your order is packed/shipped by the seller. ',noficeTime:'5 min ago'},
        {notifyLink:'#',notifyTitle:'Your order is delivered soon', notifyDes:'You will receive the next update when the item in your order is packed/shipped by the seller. ',noficeTime:'5 min ago'},
        {notifyLink:'#',notifyTitle:'Your order is delivered soon', notifyDes:'You will receive the next update when the item in your order is packed/shipped by the seller. ',noficeTime:'5 min ago'},
        {notifyLink:'#',notifyTitle:'Your order is delivered soon', notifyDes:'You will receive the next update when the item in your order is packed/shipped by the seller. ',noficeTime:'5 min ago'},
        {notifyLink:'#',notifyTitle:'Your order is delivered soon', notifyDes:'You will receive the next update when the item in your order is packed/shipped by the seller. ',noficeTime:'5 min ago'}
    ]

    const userNavData:userNavData[] = [
        {navIcon:ImUser, navName:'Profile', userNavLink:'#'},
        {navIcon:MdEmail, navName:'inbox', userNavLink:'#'},
        {navIcon:IoLockClosed, navName:'change password', userNavLink:'#'},
        {navIcon:RiLogoutBoxRFill, navName:'logout', userNavLink:'#'}
    ]

    const profileName = 'Rohit Sharma'
    const userName = 'Rohit Sharma'
    const userPosition = 'Software Engineer'
const[open,setIsOpen]=useState(false);
console.log(open,"open")
  return (
    <>
        <div className='atmosphere-header flex items-center justify-between h-[70px] px-[30px] bg-[#316863]'>
            <div className="humburger">
                <Link href='' className='border border-white border-solid flex justify-center items-center rounded-[0.375rem] w-[48px] h-[40px] transition-all duration-500 hover:bg-[rgba(0,0,0,0.2)]' onClick={()=>setIsOpen(!open)}><IoMenu className='text-white text-[23px]'/></Link>
            </div>
            <div className='right-top-header h-full flex items-center justify-end'>
                <div className="notifications me-6 h-full">
                    <DropdownMenu>
                        <DropdownMenuTrigger className='focus:bottom-0 focus:outline-none focus:shadow-none focus-visible:bottom-0 focus-visible:outline-none focus-visible:shadow-none h-full'><span className='flex items-center text-white'><HiOutlineMail className='text-white text-[23px] me-2'/> <IoIosArrowDown className='opacity-75 text-[14px]' /></span></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <HeaderEmail emailData={emailData}/>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="notifications me-6 h-full">
                    <DropdownMenu>
                        <DropdownMenuTrigger className='focus:bottom-0 focus:outline-none focus:shadow-none focus-visible:bottom-0 focus-visible:outline-none focus-visible:shadow-none h-full'><span className='flex items-center text-white'><FaRegBell className='text-white text-[23px] me-2'/> <IoIosArrowDown className='opacity-75 text-[14px]' /></span></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <HeaderNotification notificationData={notificationData}/>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="atmosphere-logged-user dropdown pl-[30px] h-full">
                    <DropdownMenu>
                        <DropdownMenuTrigger className='focus:bottom-0 focus:outline-none focus:shadow-none focus-visible:bottom-0 focus-visible:outline-none focus-visible:shadow-none h-full'>
                            <div className='flex items-center text-white'>
                                <div className="profile-image">
                                    <div className='w-[44px] h-[44px] rounded-full overflow-hidden'>
                                        <Image src={profileImg} alt=''/>
                                    </div>
                                </div>
                                <div className="atmosphere-username text-white">
                                    <span className='px-3'>{profileName}</span>
                                </div>
                                <IoIosArrowDown className='opacity-75 text-[14px]' />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='p-0 bg-transparent border-0'>
                            <UserNavs userName={userName} userPosition={userPosition} userNavData={userNavData}/>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminHeader