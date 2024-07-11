import TableHeadingBtn from '@/common/TableHeadingBtn'
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import Link from 'next/link'
import { MdModeEditOutline, MdOutlineAdd } from 'react-icons/md'
import { FaTrashAlt } from 'react-icons/fa'
import {Pagination,PaginationContent,PaginationEllipsis,PaginationItem,PaginationLink,PaginationNext,PaginationPrevious} from "@/components/ui/pagination"
import { IoCloseOutline } from 'react-icons/io5';



function ManageRoles() {
  const headingName = 'Manage Roles'
  const actionName = 'Add User'
  const tableActionLink = '#'
  return (
    <>
      <div className='bg-white rounded-[4px]'>
        <TableHeadingBtn showButton={false} headingName={headingName} tableActionLink={tableActionLink} actionName={actionName}/>
        <div className='px-4 py-5'>
        <div className="mb-5 flex justify-between items-center">
            <div className='select-role'>
                <label className='text-[15px] mb-2 flex text-gray-800'>Select Role</label>
                <Select>
                    <SelectTrigger className="focus:shadow-violet8 w-[240px] h-auto inline-flex rounded-[4px] py-3.5 border border-gray-300 px-[18px] text-[15px] outline-none focus:border-[#316863]">
                    <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                    <SelectItem value="Inventory Manager">Inventory Manager</SelectItem>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Marketing Associate">Marketing Associate</SelectItem>
                    <SelectItem value="Human Resources">Human Resources</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            
            <div className='flex'>
                <div className="role-action">
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                          <Link href='#' className='btn bg-[#198754] text-white rounded-[4px] py-2 px-3 inline-block justify-center items-center duration-500 transition-all hover:bg-[#1e714b]'><MdOutlineAdd/></Link>
                        </Dialog.Trigger>
                        <Dialog.Portal>
                        <Dialog.Overlay className="bg-black opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />
                        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                            <Dialog.Title className="border-b px-5 py-4 mb-5 text-[20px] font-medium">
                            Add Role
                            </Dialog.Title>
                            <div className='px-5 pb-7'>
                            <form action='get'>
                            <div className='grid grid-cols-1 gap-6'>
                                <div className='input-group'>
                                <label className="text-[15px] mb-2 flex text-gray-800" htmlFor="role">Role</label>
                                    <input type='text' required className="focus:shadow-violet8 inline-flex w-full rounded-[4px] py-3.5 border border-gray-300 px-[18px] text-[15px] outline-none focus:border-[#316863]" id="role"/>
                                </div>
                            </div>
                            <div className='submit-btn flex justify-end mt-6'>
                                <input type="submit" className='cursor-pointer btn py-2.5 px-7 bg-[#92B893] text-[13px] text-white rounded-0 uppercase mb-0 transition-all duration-500 hover:bg-[#2d5e59]' value="Add" />
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

            <div className="role-action mx-2">
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                    <Link href='#' className='btn bg-[#0d6efd] text-white rounded-[4px] py-2 px-3 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'><MdModeEditOutline/></Link>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                    <Dialog.Overlay className="bg-black opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />
                    <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                        <Dialog.Title className="border-b px-5 py-4 mb-5 text-[20px] font-medium">
                        Edit Role
                        </Dialog.Title>
                        <div className='px-5 pb-7'>
                        <form action='get'>
                        <div className='grid grid-cols-1 gap-6'>
                            <div className='input-group'>
                            <label className="text-[15px] mb-2 flex text-gray-800" htmlFor="role">Role</label>
                                <input type='text' required className="focus:shadow-violet8 inline-flex w-full rounded-[4px] py-3.5 border border-gray-300 px-[18px] text-[15px] outline-none focus:border-[#316863]" id="role"/>
                            </div>
                        </div>
                        <div className='submit-btn flex justify-end mt-6'>
                            <input type="submit" className='cursor-pointer btn py-2.5 px-7 bg-[#92B893] text-[13px] text-white rounded-0 uppercase mb-0 transition-all duration-500 hover:bg-[#2d5e59]' value="Add" />
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
                <div className="role-action">
                    <Link href='#' className='btn bg-[#dc3545] text-white rounded-[4px] py-2 px-3 inline-block justify-center items-center duration-500 transition-all hover:bg-[#bb2d3b]'><FaTrashAlt/></Link>  
                </div>
            </div>
        </div>

        <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5 first:rounded-tl-[10px]'>Sr. No</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Name</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5 last:border-0 last:rounded-tr-[10px]'>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>01.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>User Management</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'>Manage Navigation Permission</Link>
                  <Link href='' className='ms-2 btn bg-[#0dcaf0] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#01a7c8]'>Manage Action Permission</Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>02.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Manage Projects</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'>Manage Navigation Permission</Link>
                  <Link href='' className='ms-2 btn bg-[#0dcaf0] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#01a7c8]'>Manage Action Permission</Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>03.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Bookings</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'>Manage Navigation Permission</Link>
                  <Link href='' className='ms-2 btn bg-[#0dcaf0] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#01a7c8]'>Manage Action Permission</Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>04.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Customers</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'>Manage Navigation Permission</Link>
                  <Link href='' className='ms-2 btn bg-[#0dcaf0] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#01a7c8]'>Manage Action Permission</Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>05.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Site Visits</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'>Manage Navigation Permission</Link>
                  <Link href='' className='ms-2 btn bg-[#0dcaf0] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#01a7c8]'>Manage Action Permission</Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>06.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Transactions</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'>Manage Navigation Permission</Link>
                  <Link href='' className='ms-2 btn bg-[#0dcaf0] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#01a7c8]'>Manage Action Permission</Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>07.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Policies</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'>Manage Navigation Permission</Link>
                  <Link href='' className='ms-2 btn bg-[#0dcaf0] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#01a7c8]'>Manage Action Permission</Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>08.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Masters</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'>Manage Navigation Permission</Link>
                  <Link href='' className='ms-2 btn bg-[#0dcaf0] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#01a7c8]'>Manage Action Permission</Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Pagination className='my-7 justify-end'>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious className='px-3 transition-all duration-500 rounded-[5px] hover:bg-[#ECE1CC]' href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className='transition-all duration-500 rounded-[5px] hover:bg-[#ECE1CC] active:bg-[#2d5e59] active:text-white' href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className='transition-all duration-500 rounded-[5px] hover:bg-[#ECE1CC] active:bg-[#2d5e59] active:text-white' href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className='transition-all duration-500 rounded-[5px] hover:bg-[#ECE1CC] active:bg-[#2d5e59] active:text-white' href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className='transition-all duration-500 rounded-[5px] hover:bg-[#ECE1CC] active:bg-[#2d5e59] active:text-white' href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext className='px-3 transition-all duration-500 rounded-[5px] hover:bg-[#ECE1CC]' href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>

        </div>
      </div>
    </>
  )
}

export default ManageRoles