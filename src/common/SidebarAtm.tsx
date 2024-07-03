"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import sidebarLogo from '@/assets/images/white-logo-circle.svg';
import { FaRegAddressCard } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia';
import { BsFileEarmarkText } from 'react-icons/bs';
import { ImUser, ImUsers } from 'react-icons/im';
import { GoHomeFill } from 'react-icons/go';
import { IoMdBookmarks } from 'react-icons/io';
import Link from 'next/link';

function SidebarAtm() {
    const [isOpen, setIsOpen] = useState(false);
    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='atmoshphere-sidebar z-1 w-full max-w-[300px] bg-[#2d5e59] transition-all fixed start-0 top-0 bottom-0'>
            <div className='sidebar-wrap h-full'>
                <div className='atmosphere-logo flex justify-center px-3 py-[11.23px] text-center bg-[rgba(0,0,0,0.1)] border-[rgba(0,0,0,0.1)] border-b'>
                    <Image className='max-w-[48px] w-full' src={sidebarLogo} alt="" />
                </div>
                <div className='atmosphere-sidebar-navs py-8 border-t border-[rgba(255,255,255,0.1)] h-[calc(100vh_-_70px)]'>
                    <small className='text-white opacity-50 text-uppercase mb-2 uppercase text-[12px] w-[60px] flex justify-center'>menu</small>
                    <div className="navbar-nav w-full">
                        <aside id="sidebar-multi-level-sidebar" className="" aria-label="Sidebar">
                            <div className="">
                                <ul className="space-y-2 font-medium">
                                    <li>
                                        <Link href='/' className="flex items-center py-3 text-[rgba(255,255,255,0.85)] rounded-lg dark:text-white hover:text-[#DEBD6B] focus:text-[#DEBD6B]">
                                            <span className='flex items-center justify-center min-w-[60px]'><FaRegAddressCard className='text-[19px]' /></span> <span className='w-[calc(100%_-_60px)]'>Dashboard</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <button type="button" className="flex items-center w-full py-3 text-base text-[rgba(255,255,255,0.85)] transition duration-75 hover:text-[#DEBD6B] focus:text-[#DEBD6B]" aria-controls="dropdown-example" onClick={handleDropdownToggle}>
                                            <span className='flex items-center justify-center min-w-[60px]'><ImUser className='text-[19px]' /></span> <span className='flex items-center w-[calc(100%_-_60px)] pe-3'>User Management <svg className="w-3 h-3 ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                                            </svg></span>
                                        </button>
                                        {isOpen && (
                                            <ul id="dropdown-example" className="bg-[rgba(0,0,0,0.08)] py-1">
                                                <li>
                                                    <a href="/user-list" className="flex items-center w-full py-2 text-[rgba(255,255,255,0.85)] transition duration-75 pl-[75px] group hover:text-[#DEBD6B] focus:text-[#DEBD6B]">Products</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="flex items-center w-full py-2 text-[rgba(255,255,255,0.85)] transition duration-75 pl-[75px] group hover:text-[#DEBD6B] focus:text-[#DEBD6B]">Billing</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="flex items-center w-full py-2 text-[rgba(255,255,255,0.85)] transition duration-75 pl-[75px] group hover:text-[#DEBD6B] focus:text-[#DEBD6B]">Invoice</a>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center py-3 text-[rgba(255,255,255,0.85)] dark:text-white hover:text-[#DEBD6B] focus:text-[#DEBD6B]">
                                            <span className='flex items-center justify-center min-w-[60px]'><GoHomeFill className='text-[19px]' /></span><span className='items-center w-[calc(100%_-_60px)]'>Manage Projects</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center py-3 text-[rgba(255,255,255,0.85)] dark:text-white hover:text-[#DEBD6B] focus:text-[#DEBD6B]">
                                            <span className='flex items-center justify-center min-w-[60px]'><IoMdBookmarks className='text-[19px]' /></span> <span className='w-[calc(100%_-_60px)]'>Bookings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center py-3 text-[rgba(255,255,255,0.85)] dark:text-white hover:text-[#DEBD6B] focus:text-[#DEBD6B]">
                                            <span className='flex items-center justify-center min-w-[60px]'><ImUsers className='text-[19px]' /></span> <span className='w-[calc(100%_-_60px)]'>Customers</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center py-3 text-[rgba(255,255,255,0.85)] dark:text-white hover:text-[#DEBD6B] focus:text-[#DEBD6B]">
                                            <span className='flex items-center justify-center min-w-[60px]'><IoLocationSharp className='text-[19px]' /></span> <span className='w-[calc(100%_-_60px)]'>Site visits</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center py-3 text-[rgba(255,255,255,0.85)] dark:text-white hover:text-[#DEBD6B] focus:text-[#DEBD6B]">
                                            <span className='flex items-center justify-center min-w-[60px]'><LiaFileInvoiceDollarSolid className='text-[19px]' /></span> <span className='w-[calc(100%_-_60px)]'>Transactions</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center py-3 text-[rgba(255,255,255,0.85)] dark:text-white hover:text-[#DEBD6B] focus:text-[#DEBD6B]">
                                            <span className='flex items-center justify-center min-w-[60px]'><BsFileEarmarkText className='text-[19px]' /></span> <span className='w-[calc(100%_-_60px)]'>Policies</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center py-3 text-[rgba(255,255,255,0.85)] dark:text-white hover:text-[#DEBD6B] focus:text-[#DEBD6B]">
                                            <span className='flex items-center justify-center min-w-[60px]'><ImUser className='text-[19px]' /></span> <span className='w-[calc(100%_-_60px)]'>Masters</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SidebarAtm;