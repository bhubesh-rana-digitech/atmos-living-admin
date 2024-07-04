import TableHeadingBtn from '@/common/TableHeadingBtn'
import React from 'react'
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import Link from 'next/link'
import { MdModeEditOutline } from 'react-icons/md'
import { FaTrashAlt } from 'react-icons/fa'
import {Pagination,PaginationContent,PaginationEllipsis,PaginationItem,PaginationLink,PaginationNext,PaginationPrevious} from "@/components/ui/pagination"



function UsersList() {
  const headingName = 'List of Users'
  const actionName = 'Add User'
  const tableActionLink = '#'
  return (
    <>
      <div className='bg-white rounded-[4px]'>
        <TableHeadingBtn showButton={true} headingName={headingName} tableActionLink={tableActionLink} actionName={actionName}/>
        <div className='px-4 py-5'>
        <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5 first:rounded-tl-[10px]'>Sr. No</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Name</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Email</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Phone</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Role</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Status</TableHead>
                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5 last:border-0 last:rounded-tr-[10px]'>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>01.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Kapil Dev</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>kapil.dev@digitechsoft.com</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>+91 79734-96364</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Admin</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[180px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Active" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Suspended">Suspended</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'><MdModeEditOutline /></Link>
                  <Link href='' className='ms-2 btn bg-[#dc3545] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#bb2d3b]'><FaTrashAlt /></Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>01.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Kapil Dev</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>kapil.dev@digitechsoft.com</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>+91 79734-96364</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Admin</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[180px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Active" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Suspended">Suspended</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'><MdModeEditOutline /></Link>
                  <Link href='' className='ms-2 btn bg-[#dc3545] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#bb2d3b]'><FaTrashAlt /></Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>01.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Kapil Dev</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>kapil.dev@digitechsoft.com</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>+91 79734-96364</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Admin</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[180px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Active" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Suspended">Suspended</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'><MdModeEditOutline /></Link>
                  <Link href='' className='ms-2 btn bg-[#dc3545] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#bb2d3b]'><FaTrashAlt /></Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>01.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Kapil Dev</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>kapil.dev@digitechsoft.com</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>+91 79734-96364</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Admin</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[180px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Active" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Suspended">Suspended</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'><MdModeEditOutline /></Link>
                  <Link href='' className='ms-2 btn bg-[#dc3545] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#bb2d3b]'><FaTrashAlt /></Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]'>01.</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Kapil Dev</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>kapil.dev@digitechsoft.com</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>+91 79734-96364</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>Admin</TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] w-[180px]'>
                  <Select>
                    <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                      <SelectValue placeholder="Active" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Suspended">Suspended</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]'>
                  <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'><MdModeEditOutline /></Link>
                  <Link href='' className='ms-2 btn bg-[#dc3545] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#bb2d3b]'><FaTrashAlt /></Link>
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

export default UsersList