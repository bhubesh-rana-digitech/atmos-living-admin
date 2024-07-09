import TableHeadingBtn from '@/common/TableHeadingBtn'
import React from 'react'
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import Link from 'next/link'
import { MdModeEditOutline } from 'react-icons/md'
import { FaTrashAlt } from 'react-icons/fa'
import {Pagination,PaginationContent,PaginationEllipsis,PaginationItem,PaginationLink,PaginationNext,PaginationPrevious} from "@/components/ui/pagination"
import Image from 'next/image'
import logoImg from '@/assets/images/logo-circle.svg'



function ProjectList() {
  const headingName = 'List of Projects'
  const actionName = 'Add Project'
  const tableActionLink = '/'
  return (
    <>
      <div className='bg-white rounded-[4px]'>
        <TableHeadingBtn showButton={false} showAnchor={true} headingName={headingName} tableActionLink={tableActionLink} actionName={actionName}/>
        <div className='px-4 py-5'>
        <div className="mb-5 flex justify-end items-center">
            <Link href='' className='btn py-2.5 px-7 bg-[#6c757d] text-[13px] text-white rounded-0 uppercase mb-0 transition-all duration-500 hover:bg-[#5a6168]'>Filter</Link>
            <Link href='' className='mx-3 btn py-2.5 px-7 bg-[#92B893] text-[13px] text-white rounded-0 uppercase mb-0 transition-all duration-500 hover:bg-[#7fa080]'>Export</Link>
            <div className='search relative'>
              <form>
                <input type='text' className="focus:shadow-violet8 inline-flex w-full rounded-[4px] py-2 border border-gray-300 px-[18px] text-[15px] outline-none focus:border-[#316863]" placeholder='Search...' id="role"/>
                <input type="submit" value="dd" className='absolute right-0 top-0 bottom-0 flex items-center px-4 bg-[url('/assets/images/search.svg')]' />
              </form>
            </div>
        </div>
        <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5 first:rounded-tl-[10px]'>Sr. No</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Project Name</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Logo</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Type</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>State</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>City</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Total Units</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Booked Units</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Status</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Publish</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Featured</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5 last:border-0 last:rounded-tr-[10px]'>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>01.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'><Link href='' className='underline text-[#316863] font-bold'>Atmosphere Living</Link></TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'><Image src={logoImg} alt=''/></TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Villas, Penthouse</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Maharashtra</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Mumbai</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>25</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>15</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[195px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue className='text-[13px]' placeholder="Ready to Move" />
                    </SelectTrigger>
                    <SelectContent className='bg-white text-[13px]'>
                      <SelectItem value="Ready to Move">Ready to Move</SelectItem>
                      <SelectItem value="Under Construction">Under Construction</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[135px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Publish" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="Publish">Publish</SelectItem>
                      <SelectItem value="Unpublish">Unpublish</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[95px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Yes" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'><MdModeEditOutline /></Link>
                  <Link href='' className='ms-2 btn bg-[#dc3545] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#bb2d3b]'><FaTrashAlt /></Link>
                  <Link href='' className='ms-2 btn bg-[#0dcaf0] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#01a7c8]'><MdModeEditOutline /></Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>02.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'><Link href='' className='underline text-[#316863] font-bold'>Atmosphere Living</Link></TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'><Image src={logoImg} alt=''/></TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Villas, Penthouse</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Maharashtra</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Mumbai</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>25</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>15</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[195px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue className='text-[13px]' placeholder="Ready to Move" />
                    </SelectTrigger>
                    <SelectContent className='bg-white text-[13px]'>
                      <SelectItem value="Ready to Move">Ready to Move</SelectItem>
                      <SelectItem value="Under Construction">Under Construction</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[135px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Publish" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="Publish">Publish</SelectItem>
                      <SelectItem value="Unpublish">Unpublish</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[95px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Yes" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'><MdModeEditOutline /></Link>
                  <Link href='' className='ms-2 btn bg-[#dc3545] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#bb2d3b]'><FaTrashAlt /></Link>
                  <Link href='' className='ms-2 btn bg-[#0dcaf0] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#01a7c8]'><MdModeEditOutline /></Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>03.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'><Link href='' className='underline text-[#316863] font-bold'>Atmosphere Living</Link></TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'><Image src={logoImg} alt=''/></TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Villas, Penthouse</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Maharashtra</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Mumbai</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>25</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>15</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[195px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue className='text-[13px]' placeholder="Ready to Move" />
                    </SelectTrigger>
                    <SelectContent className='bg-white text-[13px]'>
                      <SelectItem value="Ready to Move">Ready to Move</SelectItem>
                      <SelectItem value="Under Construction">Under Construction</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[135px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Publish" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="Publish">Publish</SelectItem>
                      <SelectItem value="Unpublish">Unpublish</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[95px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Yes" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'><MdModeEditOutline /></Link>
                  <Link href='' className='ms-2 btn bg-[#dc3545] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#bb2d3b]'><FaTrashAlt /></Link>
                  <Link href='' className='ms-2 btn bg-[#0dcaf0] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#01a7c8]'><MdModeEditOutline /></Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>04.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'><Link href='' className='underline text-[#316863] font-bold'>Atmosphere Living</Link></TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'><Image src={logoImg} alt=''/></TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Villas, Penthouse</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Maharashtra</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Mumbai</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>25</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>15</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[195px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue className='text-[13px]' placeholder="Ready to Move" />
                    </SelectTrigger>
                    <SelectContent className='bg-white text-[13px]'>
                      <SelectItem value="Ready to Move">Ready to Move</SelectItem>
                      <SelectItem value="Under Construction">Under Construction</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[135px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Publish" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="Publish">Publish</SelectItem>
                      <SelectItem value="Unpublish">Unpublish</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[95px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Yes" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'><MdModeEditOutline /></Link>
                  <Link href='' className='ms-2 btn bg-[#dc3545] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#bb2d3b]'><FaTrashAlt /></Link>
                  <Link href='' className='ms-2 btn bg-[#0dcaf0] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#01a7c8]'><MdModeEditOutline /></Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>05.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'><Link href='' className='underline text-[#316863] font-bold'>Atmosphere Living</Link></TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'><Image src={logoImg} alt=''/></TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Villas, Penthouse</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Maharashtra</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Mumbai</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>25</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>15</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[195px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue className='text-[13px]' placeholder="Ready to Move" />
                    </SelectTrigger>
                    <SelectContent className='bg-white text-[13px]'>
                      <SelectItem value="Ready to Move">Ready to Move</SelectItem>
                      <SelectItem value="Under Construction">Under Construction</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[135px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Publish" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="Publish">Publish</SelectItem>
                      <SelectItem value="Unpublish">Unpublish</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[95px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Yes" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'><MdModeEditOutline /></Link>
                  <Link href='' className='ms-2 btn bg-[#dc3545] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#bb2d3b]'><FaTrashAlt /></Link>
                  <Link href='' className='ms-2 btn bg-[#0dcaf0] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#01a7c8]'><MdModeEditOutline /></Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>06.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'><Link href='' className='underline text-[#316863] font-bold'>Atmosphere Living</Link></TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'><Image src={logoImg} alt=''/></TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Villas, Penthouse</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Maharashtra</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Mumbai</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>25</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>15</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[195px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue className='text-[13px]' placeholder="Ready to Move" />
                    </SelectTrigger>
                    <SelectContent className='bg-white text-[13px]'>
                      <SelectItem value="Ready to Move">Ready to Move</SelectItem>
                      <SelectItem value="Under Construction">Under Construction</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[135px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Publish" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="Publish">Publish</SelectItem>
                      <SelectItem value="Unpublish">Unpublish</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[95px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Yes" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'><MdModeEditOutline /></Link>
                  <Link href='' className='ms-2 btn bg-[#dc3545] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#bb2d3b]'><FaTrashAlt /></Link>
                  <Link href='' className='ms-2 btn bg-[#0dcaf0] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#01a7c8]'><MdModeEditOutline /></Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>07.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'><Link href='' className='underline text-[#316863] font-bold'>Atmosphere Living</Link></TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'><Image src={logoImg} alt=''/></TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Villas, Penthouse</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Maharashtra</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Mumbai</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>25</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>15</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[195px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue className='text-[13px]' placeholder="Ready to Move" />
                    </SelectTrigger>
                    <SelectContent className='bg-white text-[13px]'>
                      <SelectItem value="Ready to Move">Ready to Move</SelectItem>
                      <SelectItem value="Under Construction">Under Construction</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[135px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Publish" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="Publish">Publish</SelectItem>
                      <SelectItem value="Unpublish">Unpublish</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[95px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Yes" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'><MdModeEditOutline /></Link>
                  <Link href='' className='ms-2 btn bg-[#dc3545] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#bb2d3b]'><FaTrashAlt /></Link>
                  <Link href='' className='ms-2 btn bg-[#0dcaf0] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#01a7c8]'><MdModeEditOutline /></Link>
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

export default ProjectList