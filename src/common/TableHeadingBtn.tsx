import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog';
import React from 'react'
import { IoCloseOutline } from 'react-icons/io5';
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
function TableHeadingBtn({showButton=true,headingName='',tableActionLink='',actionName='',showAnchor= false}) {
  return (
    <>
        <div className='border-b border-[#e9ebec] border-solid px-4 py-5'>
          <div className="flex items-center justify-between">
            <h4 className='text-[17px] font-medium opacity-85'>{headingName}</h4>
            <div className="right-card-header">
                {showButton?(
                    <div className='flex'>
                      <Dialog.Root>
                        <Dialog.Trigger asChild>
                        <Link href={tableActionLink} className='btn py-2.5 px-7 bg-[#D2AE5F] text-[13px] text-white rounded-0 uppercase mb-0 transition-all duration-500 hover:bg-[#E7C16D]'>{actionName}</Link>
                        </Dialog.Trigger>
                        <Dialog.Portal>
                          <Dialog.Overlay className="bg-black opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />
                          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[750px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                            <Dialog.Title className="border-b px-5 py-4 mb-5 text-[20px] font-medium">
                            Add User
                            </Dialog.Title>
                            <div className='px-5 pb-7'>
                              <form action='get'>
                              <div className='grid grid-cols-2 gap-6'>
                                <div className='input-group'>
                                  <label className="text-[15px] mb-2 flex text-gray-800" htmlFor="name">Name</label>
                                    <input type='text' required className="focus:shadow-violet8 inline-flex w-full rounded-[4px] py-3.5 border border-gray-300 px-[18px] text-[15px] outline-none focus:border-[#316863]" id="name"/>
                                </div>
                                <div className='input-group'>
                                <label className="text-[15px] mb-2 flex text-gray-800" htmlFor="email">Email</label>
                                <input type='email' className="focus:shadow-violet8 inline-flex w-full rounded-[4px] py-3.5 border border-gray-300 px-[18px] text-[15px] outline-none focus:border-[#316863]" id="email"/>
                              </div>
                              <div className='input-group'>
                                <label className="text-[15px] mb-2 flex text-gray-800" htmlFor="phone">Phone</label>
                                <input type='tel' className="focus:shadow-violet8 inline-flex w-full rounded-[4px] py-3.5 border border-gray-300 px-[18px] text-[15px] outline-none focus:border-[#316863]" id="phone"/>
                              </div>
                              <div className='input-group'>
                                <label className="text-[15px] mb-2 flex text-gray-800" htmlFor="email">Role</label>
                                <Select>
                                  <SelectTrigger className="focus:shadow-violet8 h-auto inline-flex w-full rounded-[4px] py-3.5 border border-gray-300 px-[18px] text-[15px] outline-none focus:border-[#316863]">
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                  <SelectContent className='bg-white'>
                                    <SelectItem value="Director">Director</SelectItem>
                                    <SelectItem value="Manager">Manager</SelectItem>
                                    <SelectItem value="Team Leader">Team Leader</SelectItem>
                                    <SelectItem value="Human Resources">Human Resources</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              </div>
                              <div className='submit-btn flex justify-end mt-6'>
                                <input type="submit" className='cursor-pointer btn py-2.5 px-7 bg-[#D2AE5F] text-[13px] text-white rounded-0 uppercase mb-0 transition-all duration-500 hover:bg-[#E7C16D]' value="Add New" />
                              </div>
                              </form>
                            </div>
                            <Dialog.Close asChild>
                              <button
                                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                                aria-label="Close"
                              >
                                <span><IoCloseOutline className='text-2xl' /></span>
                              </button>
                            </Dialog.Close>
                          </Dialog.Content>
                        </Dialog.Portal>
                      </Dialog.Root>
                    </div>
                ):("")}

                {showAnchor?(
                    <div className='flex'>
                      <Link href={tableActionLink} className='btn py-2.5 px-7 bg-[#D2AE5F] text-[13px] text-white rounded-0 uppercase mb-0 transition-all duration-500 hover:bg-[#E7C16D]'>{actionName}</Link>
                    </div>
                ):("")}

            </div>
          </div>
        </div>
    </>
  )
}

export default TableHeadingBtn