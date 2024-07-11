import TableHeadingBtn from '@/common/TableHeadingBtn'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import React from 'react'
import { FaEye, FaTrashAlt } from 'react-icons/fa'
import { MdModeEditOutline } from 'react-icons/md'
import imageOne from '@/assets/images/logo-circle.svg'
import Image from 'next/image'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'

function page() {
    const headingName = "Payment Plans"
    const actionName = "Add Plan"
    const tableActionLink = ""

    const paymentTable = [
        {
            serialNumber: "01.",
            UnitNumber: "Basic",
            projectPublish: "Active",
            projectPublishTwo: "Inactive",
            unitAction: <MdModeEditOutline/>,
            unitActionTwo: <FaTrashAlt/>,
            unitActionThree: <FaEye />
            ,
        },
        {
            serialNumber: "02.",
            UnitNumber: "Standard",
            projectPublish: "Active",
            projectPublishTwo: "Inactive",
            unitAction: <MdModeEditOutline/>,
            unitActionTwo: <FaTrashAlt/>,
            unitActionThree: <FaEye />
        },
        {
            serialNumber: "03.",
            UnitNumber: "Premium",
            projectPublish: "Active",
            projectPublishTwo: "Inactive",
            unitAction: <MdModeEditOutline/>,
            unitActionTwo: <FaTrashAlt/>,
            unitActionThree: <FaEye />
        },
        {
            serialNumber: "04.",
            UnitNumber: "Gold",
            projectPublish: "Active",
            projectPublishTwo: "Inactive",
            unitAction: <MdModeEditOutline/>,
            unitActionTwo: <FaTrashAlt/>,
            unitActionThree: <FaEye />  
        },
      ]
    

    return (
        <>
            <div className='bg-white rounded-[4px]'>
                <TableHeadingBtn showButton={false} showAnchor={true} headingName={headingName} tableActionLink={tableActionLink} actionName={actionName}/>

                <div className='px-4 py-5'>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5 first:rounded-tl-[10px]'>Sr. No</TableHead>
                                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Unit No.</TableHead>
                                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Project</TableHead>
                                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5 last:border-0 last:rounded-tr-[10px]'>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paymentTable.map((paymentTable) => (
                                <TableRow key={paymentTable.invoice}>
                                    <TableCell className="py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]">{paymentTable.serialNumber}</TableCell>
                                    <TableCell className="py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]">{paymentTable.UnitNumber}</TableCell>
                                    <TableCell className="py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px] w-[400px]">
                                        <Select>
                                            <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                                                <SelectValue placeholder="Active" />
                                            </SelectTrigger>
                                            <SelectContent className='bg-white'>
                                                <SelectItem value="Active">{paymentTable.projectPublish}</SelectItem>
                                                <SelectItem value="Inactive">{paymentTable.projectPublishTwo}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </TableCell>
                                    <TableCell className="py-[23px] text-[15px] border-r border-b flex items-center !border-t-0 border-[rgba(0,0,0,0.12)] ">
                                        <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'>{paymentTable.unitAction}</Link>
                                        <Link href='' className='ms-2 btn bg-[#0dcaf0] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#01a7c8]'>{paymentTable.unitActionThree}</Link>
                                        <Link href='' className='ms-2 btn bg-[#dc3545] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#bb2d3b]'>{paymentTable.unitActionTwo}</Link>
                                    </TableCell>
                                </TableRow>
                            ))}
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

export default page
